import * as generated from '../../graphql/generated/graphql';
import { Todo } from '../../graphql/generated/graphql';
import { TODOS } from '../../graphql/queries';
import { useSkip } from '../useSkip';

export const useRemovedTodoSubscription = () => {
  const { ref } = useSkip();
  return generated.useRemovedTodoSubscription({
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (!subscriptionData.data?.removedTodo) return;

      const newDataId = subscriptionData.data?.removedTodo.id;

      client.cache.updateQuery(
        {
          query: TODOS,
          variables: { data: { limit: 4, skip: ref.current } },
          overwrite: true,
        },
        (data) => {
          if (data) {
            return {
              todos: {
                ...data.todos,
                total: data.todos.total - 1,
                edges: data.todos.edges.filter(
                  (todo: Todo) => String(todo.id) !== String(newDataId),
                ),
              },
            };
          }
        },
      );
    },
  });
};
