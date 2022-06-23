import { useEffect, useState } from 'react';

export const useDebounce = (value: any, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const [isDebouncing, setIsDebouncing] = useState(false);

  useEffect(() => {
    setIsDebouncing(true);
    const delayCallback = setTimeout(() => {
      setDebouncedValue(value);
      setIsDebouncing(false);
    }, delay);

    return () => clearTimeout(delayCallback);
  }, [delay, value]);

  return { debouncedValue, isDebouncing };
};
