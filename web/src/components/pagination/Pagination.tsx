import './Pagination.css';

import { FC } from 'react';

export const Pagination: FC<PaginationType> = ({ handleFetchMore, showMore }) => {
  return (
    <div className='pagination'>
      <a
        href=''
        className={!showMore ? 'paginationButtonDisabled' : 'paginationButton'}
        onClick={(e) => {
          e.preventDefault();
          showMore && handleFetchMore();
        }}
      >
        Fetch more...
      </a>
    </div>
  );
};

type PaginationType = {
  handleFetchMore: () => void;
  showMore: boolean;
};
