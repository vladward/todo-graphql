import {
  Args,
  ID,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo } from './models';
import {
  CreateTodoInputDto,
  EditTodoInputDto,
  GetTodosInputDto,
  TodosObjectDto,
} from './dto';
import { Types } from 'mongoose';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver()
export class TodosResolver {
  constructor(private todosService: TodosService) {}

  @Query(() => TodosObjectDto)
  async todos(@Args('data') data: GetTodosInputDto) {
    return this.todosService.getTodos(data);
  }

  @Query(() => Todo)
  async todo(@Args({ name: 'id', type: () => ID }) id: Types.ObjectId) {
    return this.todosService.getTodo(id);
  }

  @Mutation(() => Todo)
  async createTodo(@Args('data') data: CreateTodoInputDto) {
    const todo = await this.todosService.createTodo(data);

    pubSub.publish('updatedTodo', { todo });

    return todo;
  }

  @Mutation(() => Todo)
  async editTodo(@Args('data') data: EditTodoInputDto) {
    const todo = await this.todosService.editTodo(data);

    pubSub.publish('updatedTodo', { todo });

    return todo;
  }

  @Mutation(() => Todo)
  async removeTodo(@Args({ name: 'id', type: () => ID }) id: Types.ObjectId) {
    const todo = await this.todosService.removeTodo(id);

    pubSub.publish('removedTodo', { todo });

    return todo;
  }

  @Subscription(() => Todo, {
    name: 'updatedTodo',
    resolve: ({ todo }) => {
      return todo;
    },
  })
  async updatedTodoSubscription() {
    return pubSub.asyncIterator('updatedTodo');
  }

  @Subscription(() => Todo, {
    name: 'removedTodo',
    resolve: ({ todo }) => todo,
  })
  async removedTodoSubscription() {
    return pubSub.asyncIterator('removedTodo');
  }
}
