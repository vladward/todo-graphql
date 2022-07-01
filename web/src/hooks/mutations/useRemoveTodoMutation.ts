import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';
import { Todo } from '../../graphql/generated/graphql';
import { TODOS } from '../../graphql/queries';
import { useSkip } from '../useSkip';

export const useRemoveTodoMutation = () => {
  const { ref } = useSkip();
  return generated.useRemoveTodoMutation({
    update(cache, { data }) {
      if (!data) return;

      const removeTodoId = data.removeTodo.id;

      cache.updateQuery(
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
