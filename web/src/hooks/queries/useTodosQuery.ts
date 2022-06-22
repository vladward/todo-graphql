import * as generated from '../../graphql/generated/graphql';

export const useTodosQuery = ({ ...options }) => {
  return generated.useTodosQuery({
    variables: {
      data: {
        ...options,
        limit: 100,
      },
    },
  });
};
