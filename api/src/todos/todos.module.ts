import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Todo, TodoSchema } from './models';
import { TodosService } from './todos.service';
import { TodosResolver } from './todos.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
  ],
  providers: [TodosService, TodosResolver],
})
export class TodosModule {}
