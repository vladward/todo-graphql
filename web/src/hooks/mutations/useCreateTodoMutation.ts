import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';

export const useCreateTodoMutation = (handleCloseModal: () => void) => {
  return generated.useCreateTodoMutation({
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
