import './Todolists.css';

import { FC } from 'react';

import { Card, Pagination } from '../../components';
import { Todo } from '../../graphql/generated/graphql';
import { useSkip } from '../../hooks';
import { useTodosQuery } from '../../hooks/queries';

export const Todolists: FC = () => {
  const { ref, handleIncrementSkipValue } = useSkip();

  const { data, fetchMore, variables } = useTodosQuery({});

  const handleFetchMore = async () => {
    if (data?.todos.total && variables?.data.limit) {
      handleIncrementSkipValue(8);
      await fetchMore({
        variables: {
          data: {
            skip: ref.current,
            limit: 4,
          },
        },
      });
    }
  };

  const totalTodos = Number(data?.todos.total) / 2;

  let showMore = true;

  if (Number(data?.todos.edges.length) >= totalTodos) {
    showMore = false;
  }

  return (
    <div>
      <div className='uk-flex uk-child-width-1-4 uk-flex-wrap uk-flex-wrap-around uk-flex-center'>
        {data?.todos.edges?.map((edge: Todo, index) => {
          const { id, title, description, completed } = edge;

          return (
            <Card
              key={id + title + description + index}
              title={title}
              id={id}
              description={description}
              completed={completed}
            />
          );
        })}
      </div>
      <Pagination showMore={showMore} handleFetchMore={handleFetchMore} />
    </div>
  );
};
