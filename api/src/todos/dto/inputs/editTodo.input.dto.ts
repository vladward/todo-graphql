import { Types } from 'mongoose';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class EditTodoInputDto {
  @Field(() => ID)
  id: Types.ObjectId;

  @Field({
    nullable: true,
  })
  title: string;

  @Field({
    nullable: true,
  })
  description: string;

  @Field({
    nullable: true,
  })
  completed: boolean;
}
