import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const CREATE_TODO = gql`
  ${TODO_FRAGMENT}
  mutation createTodo($data: CreateTodoInputDto!) {
    createTodo(data: $data) {
      ...TodoFragment
    }
  }
`;
