import { useSearchContext } from '../../context';
import * as generated from '../../graphql/generated/graphql';

export const useTodosQuery = () => {
  const { debouncedValue } = useSearchContext();
  return generated.useTodosQuery({
    variables: {
      data: {
        title: debouncedValue,
        limit: 200,
      },
    },
  });
};
