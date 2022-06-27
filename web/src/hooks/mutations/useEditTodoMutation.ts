import { toast } from 'react-toastify';

import { TODO_FRAGMENT } from '../../graphql/fragments';
import * as generated from '../../graphql/generated/graphql';

export const useEditTodoMutation = (handleCloseModal: () => void) => {
  return generated.useEditTodoMutation({
    update(cache, { data }) {
      if (data) {
        cache.updateFragment(
          {
            id: cache.identify(data.editTodo),
            fragment: TODO_FRAGMENT,
          },
          (data) => ({
            ...data,
            title: data.title,
            description: data.description,
            completed: data.completed,
          }),
        );
      }
    },
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
