import { useEffect, useState } from 'react';

import { useSearchContext } from '../context';
import { useTodosQuery } from './queries';

export const usePagination = () => {
  const { data } = useTodosQuery();

  const { debouncedValue } = useSearchContext();

  useEffect(() => {
    if (debouncedValue) setCurrentPage(1);
  }, [debouncedValue]);

  const posts = data?.todos.edges;

  const [currentPage, setCurrentPage] = useState(1);

  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;

  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = data?.todos?.edges.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return { currentPosts, postsPerPage, posts, paginate, currentPage };
};
