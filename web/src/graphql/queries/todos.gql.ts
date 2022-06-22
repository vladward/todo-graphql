import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const TODOS = gql`
  ${TODO_FRAGMENT}
  query todos($data: GetTodosInputDto!) {
    todos(data: $data) {
      edges {
        ...TodoFragment
      }
      total
    }
  }
`;
