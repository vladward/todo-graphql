import { TODO_FRAGMENT } from '../../graphql/fragments';
import * as generated from '../../graphql/generated/graphql';
import { TodosDocument, TodosQuery } from '../../graphql/generated/graphql';
import { TODOS } from '../../graphql/queries';
import { useSkip } from '../useSkip';

export const useUpdatedTodoSubscription = () => {
  const { ref } = useSkip();
  return generated.useUpdatedTodoSubscription({
    //way of update subscription
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (!subscriptionData.data?.updatedTodo) return;

      const newData = subscriptionData.data?.updatedTodo;

      const newTodos: TodosQuery | null = client.cache.readQuery({
        query: TodosDocument,
        variables: { data: { limit: 4, skip: ref.current } },
      });

      const checkId = newTodos?.todos.edges.filter((edge) => edge?.id === newData.id);

      if (checkId?.length) {
        client.cache.updateFragment(
          { id: client.cache.identify(newData), fragment: TODO_FRAGMENT },
          (data) => {
            if (data) {
              return {
                ...data,
                title: data.title,
                description: data.description,
                completed: data.completed,
              };
            }
          },
        );
      } else {
        //if incoming id is not includes on cache todos data - use updateQuery for add item
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
                  edges: [newData, ...(data.todos.edges || [])],
                },
              };
            }
          },
        );
      }
    },
  });
};
