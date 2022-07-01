import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

import { useDebounce } from '../hooks';

const SearchContext = createContext<any>('');
const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
};

const SearchProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const { debouncedValue, isDebouncing } = useDebounce(searchValue);

  // console.log(searchValue);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        debouncedValue,
        isDebouncing,
        setSearchValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export { SearchProvider, useSearchContext };
