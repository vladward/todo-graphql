import { FC } from 'react';

import { Todo } from '../../graphql/generated/graphql';
import { Card } from '../card/Card';

export const Todolists: FC<TodolistsType> = ({ data }) => {
  return (
    <div className='uk-flex uk-flex-wrap uk-flex-wrap-around uk-flex-between uk-padding-small'>
      {data?.map((edge: Todo) => {
        const { id, title, description, completed } = edge;
        return (
          <Card
            key={id + title}
            title={title}
            id={id}
            description={description}
            completed={completed}
          />
        );
      })}
    </div>
  );
};

type TodolistsType = {
  data?: Array<Todo>;
  total?: number;
};
