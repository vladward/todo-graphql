import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';
import { TODOS } from '../../graphql/queries';

export const useCreateTodoMutation = (handleCloseModal: () => void) => {
  return generated.useCreateTodoMutation({
    update(cache, { data }) {
      if (data) {
        //First way

        const newTodo = data.createTodo;
        cache.updateQuery(
          {
            query: TODOS,
            variables: {
              data: {
                limit: 200,
                title: '',
              },
            },
          },
          (data) => {
            return {
              todos: {
                ...data.todos,
                total: data.todos.total,
                edges: [...(data.todos.edges || []), newTodo],
              },
            };
          },
        );

        //Second way

        // cache.modify({
        //   fields: {
        //     todos(existingTodoRefs) {
        //       return {
        //         total: existingTodoRefs.total,
        //         edges: [...existingTodoRefs.edges, data.createTodo],
        //       };
        //     },
        //   },
        // });
      }
    },
    onCompleted: (res) => {
      if (res.createTodo) {
        handleCloseModal();
        toast.success(`Todo ${res.createTodo.title} was added`);
      }
    },
    onError: (err) => {
      toast.error('Something went wrong');
      console.log(err.message);
    },
  });
};
