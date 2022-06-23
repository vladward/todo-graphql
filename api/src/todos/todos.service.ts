import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo, TodoDocument } from './models';
import { Model, Types } from 'mongoose';
import { CreateTodoInputDto, EditTodoInputDto, GetTodosInputDto } from './dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}

  async getTodos(data: GetTodosInputDto) {
    const total = await this.todoModel.find({
        ...(data?.title ? { title: {$regex: data.title, $options: 'i'} } : null)
    }).count();

    const edges = await this.todoModel.find({
          ...(data?.title ? { title: {$regex: data.title, $options: 'i'} } : null)
        }, null, { ...data });

    return {
      edges,
      total,
    };
  }

  getTodo(id: Types.ObjectId) {
    return this.todoModel.findById(id);
  }

  createTodo(data: CreateTodoInputDto) {
    const createdTodo = new this.todoModel(data);

    return createdTodo.save();
  }

  async editTodo(data: EditTodoInputDto) {
    const { id, ...update } = data;

    return this.todoModel.findByIdAndUpdate(id, update);
  }

  removeTodo(id: Types.ObjectId) {
    return this.todoModel.findByIdAndRemove(id);
  }
}
