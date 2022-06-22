import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Field, ID, ObjectType } from '@nestjs/graphql';

export type TodoDocument = Todo & Document;

@ObjectType()
@Schema()
export class Todo {
  @Field()
  @Prop({ required: true })
  title: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({
    default(): boolean {
      return false;
    },
  })
  completed: boolean;

  @Field(() => ID, {
    name: 'id',
  })
  _id: Types.ObjectId;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
