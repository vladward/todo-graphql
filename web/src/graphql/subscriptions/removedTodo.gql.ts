import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const REMOVED_TODO_SUBSCRIPTION = gql`
  ${TODO_FRAGMENT}
  subscription removedTodo {
    removedTodo {
      ...TodoFragment
    }
  }
`;
