import './Todolists.css';

import { FC } from 'react';

import { Card, Pagination } from '../../components';
import { Todo } from '../../graphql/generated/graphql';
import { usePagination } from '../../hooks';

export const Todolists: FC = () => {
  const { postsPerPage, posts, paginate, currentPosts, currentPage } = usePagination();

  return (
    <div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts?.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <div className='uk-flex uk-child-width-1-4 uk-flex-wrap uk-flex-wrap-around uk-flex-center'>
        {currentPosts?.map((edge: Todo) => {
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
