import { toast } from 'react-toastify';

import * as generated from '../../graphql/generated/graphql';

export const useRemoveTodoMutation = () => {
  return generated.useRemoveTodoMutation({
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
