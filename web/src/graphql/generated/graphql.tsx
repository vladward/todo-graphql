import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTodoInputDto = {
  description: Scalars['String'];
  title: Scalars['String'];
};

export type EditTodoInputDto = {
  completed?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
};

export type GetTodosInputDto = {
  limit?: InputMaybe<Scalars['Float']>;
  skip?: InputMaybe<Scalars['Float']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: Todo;
  editTodo: Todo;
  removeTodo: Todo;
};

export type MutationCreateTodoArgs = {
  data: CreateTodoInputDto;
};

export type MutationEditTodoArgs = {
  data: EditTodoInputDto;
};

export type MutationRemoveTodoArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  todo: Todo;
  todos: Todos;
};

export type QueryTodoArgs = {
  id: Scalars['ID'];
};

export type QueryTodosArgs = {
  data: GetTodosInputDto;
};

export type Subscription = {
  __typename?: 'Subscription';
  removeTodo: Todo;
  updatedTodo: Todo;
};

export type Todo = {
  __typename?: 'Todo';
  completed: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Todos = {
  __typename?: 'todos';
  edges: Array<Todo>;
  total: Scalars['Float'];
};

export type TodosQueryVariables = Exact<{
  data: GetTodosInputDto;
}>;

export type TodosQuery = {
  __typename?: 'Query';
  todos: {
    __typename?: 'todos';
    total: number;
    edges: Array<{
      __typename?: 'Todo';
      title: string;
      description: string;
      completed: boolean;
      id: string;
    }>;
  };
};

export const TodosDocument = gql`
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

/**
 * __useTodosQuery__
 *
 * To run a query within a React component, call `useTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useTodosQuery(
  baseOptions: Apollo.QueryHookOptions<TodosQuery, TodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
}
export function useTodosLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodosQuery, TodosQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodosQuery, TodosQueryVariables>(TodosDocument, options);
}
export type TodosQueryHookResult = ReturnType<typeof useTodosQuery>;
export type TodosLazyQueryHookResult = ReturnType<typeof useTodosLazyQuery>;
export type TodosQueryResult = Apollo.QueryResult<TodosQuery, TodosQueryVariables>;
