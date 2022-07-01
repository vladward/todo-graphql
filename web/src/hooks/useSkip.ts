import { useRef } from 'react';

export const useSkip = () => {
  const ref = useRef(0);

  const handleIncrementSkipValue = (value: number) => {
    return (ref.current += value);
  };
  return { ref, handleIncrementSkipValue };
};
