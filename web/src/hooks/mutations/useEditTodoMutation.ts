import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';

export const useEditTodoMutation = (handleCloseModal: () => void) => {
  return generated.useEditTodoMutation({
    onCompleted: (res) => {
      if (res.editTodo) {
        handleCloseModal();
        toast.success(`Todo ${res.editTodo.title} was edited`);
      }
    },
    onError: (err) => {
      toast.error('Something went wrong');
      console.log(err.message);
    },
  });
};
