import './Todolists.css';

import { FC } from 'react';

import { Card } from '../../components';
import { Todo } from '../../graphql/generated/graphql';
import { useTodosQuery } from '../../hooks/queries';

export const Todolists: FC = () => {
  const { data } = useTodosQuery({});
  return (
    <div className='uk-padding-small'>
      <div className='uk-flex uk-flex-wrap uk-flex-wrap-around uk-flex-between uk-padding-small'>
        {data?.todos.edges.map((edge: Todo) => {
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
    </div>
  );
};
