import './Pagination.css';

import { FC } from 'react';

export const Pagination: FC<PaginationType> = ({
  paginate,
  postsPerPage,
  totalPosts,
  currentPage,
}) => {
  const pageNumbers = [];

  if (totalPosts && postsPerPage) {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div className='pagination'>
      {pageNumbers.map((number, index) => (
        <a
          href=''
          className={currentPage === number ? 'active' : ''}
          key={number + index}
          onClick={(e) => {
            e.preventDefault();
            paginate(number);
          }}
        >
          {number}
        </a>
      ))}
    </div>
  );
};

type PaginationType = {
  totalPosts?: number;
  postsPerPage?: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};
