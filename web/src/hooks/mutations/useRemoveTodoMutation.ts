import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';
import { Todo } from '../../graphql/generated/graphql';
import { TODOS } from '../../graphql/queries';

export const useRemoveTodoMutation = () => {
  return generated.useRemoveTodoMutation({
    update(cache, { data }) {
      if (!data) return;

      const removeTodoId = data.removeTodo.id;

      cache.updateQuery(
        {
          query: TODOS,
          variables: { data: { limit: 4 } },
          overwrite: true,
        },
        (data) => {
          if (data) {
            console.log(
              data.todos.edges.filter(
                (todo: Todo) => String(todo.id) !== String(removeTodoId),
              ),
            );
            return {
              todos: {
                ...data.todos,
                total: data.todos.total,
                edges: data.todos.edges.filter(
                  (todo: Todo) => String(todo.id) !== String(removeTodoId),
                ),
              },
            };
          }
        },
      );
    },
    onCompleted: (res) => {
      if (res.removeTodo) {
        toast.success(`Todo ${res.removeTodo.title} was removed`);
      }
    },
    onError: (err) => {
      toast.error('Something went wrong');
      console.log(err.message);
    },
  });
};
