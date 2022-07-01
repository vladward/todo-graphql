import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';
// import { TODOS } from '../../graphql/queries';
// import { useSkip } from '../useSkip';

export const useCreateTodoMutation = (handleCloseModal: () => void) => {
  // const { ref } = useSkip();
  return generated.useCreateTodoMutation({
    // update(cache, { data }) {
    //   if (data) {
    //First way
    // const newTodo = data.createTodo;
    // cache.updateQuery(
    //   {
    //     query: TODOS,
    //     variables: { data: { limit: 4, skip: ref.current } },
    //     overwrite: true,
    //   },
    //   (data) => {
    //     if (data) {
    //       return {
    //         todos: {
    //           ...data.todos,
    //           total: data.todos.total + 1,
    //           edges: [newTodo, ...(data.todos.edges || [])],
    //         },
    //       };
    //     }
    //   },
    // );
    //Second way
    // cache.modify({
    //   fields: {
    //     todos(existingTodoRefs) {
    //       return {
    //         total: existingTodoRefs.total,
    //         edges: [data.createTodo, ...existingTodoRefs.edges],
    //       };
    //     },
    //   },
    // });
    // }
    // },
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
