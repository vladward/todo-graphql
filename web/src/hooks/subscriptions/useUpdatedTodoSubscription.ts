import { TODO_FRAGMENT } from '../../graphql/fragments';
import * as generated from '../../graphql/generated/graphql';
import { TodosDocument, TodosQuery } from '../../graphql/generated/graphql';
import { TODOS } from '../../graphql/queries';

export const useUpdatedTodoSubscription = () => {
  return generated.useUpdatedTodoSubscription({
    //way of update subscription
    onSubscriptionData: ({ client, subscriptionData }) => {
      if (!subscriptionData.data?.updatedTodo) return;

      const newData = subscriptionData.data?.updatedTodo;

      const newTodos: TodosQuery | null = client.cache.readQuery({
        query: TodosDocument,
        variables: {
          data: {
            limit: 4,
          },
        },
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
        client.cache.updateQuery({ query: TODOS }, (data) => {
          if (data) {
            return {
              todos: {
                ...data.todos,
                total: data.todos.total - 1,
                edges: [...(data.todos.edges || []), newData],
              },
            };
          }
        });
      }
    },
  });
};
