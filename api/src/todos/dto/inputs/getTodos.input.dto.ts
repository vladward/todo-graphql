import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetTodosInputDto {
  @Field(() => Number, {
    defaultValue: 10,
    nullable: true,
  })
  limit: number;

  @Field(() => Number, {
    defaultValue: 0,
    nullable: true,
  })
  skip: number;

  @Field(() => String, {
    nullable: true,
  })
  title: string;
}
