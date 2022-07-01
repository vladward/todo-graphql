import { gql } from '@apollo/client';

import { TODO_FRAGMENT } from '../fragments';

export const UPDATED_TODO_SUBSCRIPTION = gql`
  ${TODO_FRAGMENT}
  subscription updatedTodo {
    updatedTodo {
      ...TodoFragment
    }
  }
`;
