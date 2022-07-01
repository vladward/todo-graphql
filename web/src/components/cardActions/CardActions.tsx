import './CardActions.css';

import { FC } from 'react';

import { CardType } from '../card/Card';
import { EditTodo } from '../editTodo/EditTodo';
import { RemoveTodo } from '../removeTodo/RemoveTodo';

export const CardActions: FC<CardType> = ({ id, completed, description, title }) => {
  return (
    <div className='actions'>
      <EditTodo id={id} completed={completed} description={description} title={title} />
      <RemoveTodo id={id} />
    </div>
  );
};
