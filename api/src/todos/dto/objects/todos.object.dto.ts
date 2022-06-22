import { Field, ObjectType } from '@nestjs/graphql';
import { Todo } from '../../models';

@ObjectType('todos')
export class TodosObjectDto {
  @Field(() => [Todo])
  edges: Todo[];

  @Field(() => Number)
  total: number;
}
