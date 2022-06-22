import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTodoInputDto {
  @Field()
  title: string;

  @Field()
  description: string;
}
