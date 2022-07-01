import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const EDIT_TODO = gql`
  ${TODO_FRAGMENT}
  mutation editTodo($data: EditTodoInputDto!) {
    editTodo(data: $data) {
      ...TodoFragment
    }
  }
`;
