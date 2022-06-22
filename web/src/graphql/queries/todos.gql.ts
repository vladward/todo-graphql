import { gql } from '@apollo/client';

export const TODOS = gql`
  query todos($data: GetTodosInputDto!) {
    todos(data: $data) {
      edges {
        title
        description
        completed
        id
      }
      total
    }
  }
`;
