import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const REMOVE_TODO = gql`
  ${TODO_FRAGMENT}
  mutation removeTodo($id: ID!) {
    removeTodo(id: $id) {
      ...TodoFragment
    }
  }
`;
