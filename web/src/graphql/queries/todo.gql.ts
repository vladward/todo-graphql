import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const TODO = gql`
  ${TODO_FRAGMENT}
  query todo($id: ID!) {
    todo(id: $id) {
      ...TodoFragment
    }
  }
`;
