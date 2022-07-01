import { useSearchContext } from '../../context';
import * as generated from '../../graphql/generated/graphql';

export const useTodosQuery = ({ ...options }) => {
  const { debouncedValue } = useSearchContext();

  return generated.useTodosQuery({
    variables: {
      data: {
        ...options,
        limit: 4,
        title: debouncedValue || undefined,
      },
    },
  });
};
