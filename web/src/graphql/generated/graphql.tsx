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
  title?: InputMaybe<Scalars['String']>;
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

export type TodoFragmentFragment = {
  __typename: 'Todo';
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type CreateTodoMutationVariables = Exact<{
  data: CreateTodoInputDto;
}>;

export type CreateTodoMutation = {
  __typename?: 'Mutation';
  createTodo: {
    __typename: 'Todo';
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };
};

export type EditTodoMutationVariables = Exact<{
  data: EditTodoInputDto;
}>;

export type EditTodoMutation = {
  __typename?: 'Mutation';
  editTodo: {
    __typename: 'Todo';
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };
};

export type RemoveTodoMutationVariables = Exact<{
  id: Scalars['ID'];
}>;

export type RemoveTodoMutation = {
  __typename?: 'Mutation';
  removeTodo: {
    __typename: 'Todo';
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };
};

export type TodoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type TodoQuery = {
  __typename?: 'Query';
  todo: {
    __typename: 'Todo';
    id: string;
    title: string;
    description: string;
    completed: boolean;
  };
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
      __typename: 'Todo';
      id: string;
      title: string;
      description: string;
      completed: boolean;
    }>;
  };
};

export const TodoFragmentFragmentDoc = gql`
  fragment TodoFragment on Todo {
    __typename
    id
    title
    description
    completed
  }
`;
export const CreateTodoDocument = gql`
  mutation createTodo($data: CreateTodoInputDto!) {
    createTodo(data: $data) {
      ...TodoFragment
    }
  }
  ${TodoFragmentFragmentDoc}
`;
export type CreateTodoMutationFn = Apollo.MutationFunction<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateTodoMutation,
    CreateTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(
    CreateTodoDocument,
    options,
  );
}
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = Apollo.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = Apollo.BaseMutationOptions<
  CreateTodoMutation,
  CreateTodoMutationVariables
>;
export const EditTodoDocument = gql`
  mutation editTodo($data: EditTodoInputDto!) {
    editTodo(data: $data) {
      ...TodoFragment
    }
  }
  ${TodoFragmentFragmentDoc}
`;
export type EditTodoMutationFn = Apollo.MutationFunction<
  EditTodoMutation,
  EditTodoMutationVariables
>;

/**
 * __useEditTodoMutation__
 *
 * To run a mutation, you first call `useEditTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTodoMutation, { data, loading, error }] = useEditTodoMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<EditTodoMutation, EditTodoMutationVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<EditTodoMutation, EditTodoMutationVariables>(
    EditTodoDocument,
    options,
  );
}
export type EditTodoMutationHookResult = ReturnType<typeof useEditTodoMutation>;
export type EditTodoMutationResult = Apollo.MutationResult<EditTodoMutation>;
export type EditTodoMutationOptions = Apollo.BaseMutationOptions<
  EditTodoMutation,
  EditTodoMutationVariables
>;
export const RemoveTodoDocument = gql`
  mutation removeTodo($id: ID!) {
    removeTodo(id: $id) {
      ...TodoFragment
    }
  }
  ${TodoFragmentFragmentDoc}
`;
export type RemoveTodoMutationFn = Apollo.MutationFunction<
  RemoveTodoMutation,
  RemoveTodoMutationVariables
>;

/**
 * __useRemoveTodoMutation__
 *
 * To run a mutation, you first call `useRemoveTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeTodoMutation, { data, loading, error }] = useRemoveTodoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveTodoMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RemoveTodoMutation,
    RemoveTodoMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RemoveTodoMutation, RemoveTodoMutationVariables>(
    RemoveTodoDocument,
    options,
  );
}
export type RemoveTodoMutationHookResult = ReturnType<typeof useRemoveTodoMutation>;
export type RemoveTodoMutationResult = Apollo.MutationResult<RemoveTodoMutation>;
export type RemoveTodoMutationOptions = Apollo.BaseMutationOptions<
  RemoveTodoMutation,
  RemoveTodoMutationVariables
>;
export const TodoDocument = gql`
  query todo($id: ID!) {
    todo(id: $id) {
      ...TodoFragment
    }
  }
  ${TodoFragmentFragmentDoc}
`;

/**
 * __useTodoQuery__
 *
 * To run a query within a React component, call `useTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTodoQuery(
  baseOptions: Apollo.QueryHookOptions<TodoQuery, TodoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
}
export function useTodoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TodoQuery, TodoQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TodoQuery, TodoQueryVariables>(TodoDocument, options);
}
export type TodoQueryHookResult = ReturnType<typeof useTodoQuery>;
export type TodoLazyQueryHookResult = ReturnType<typeof useTodoLazyQuery>;
export type TodoQueryResult = Apollo.QueryResult<TodoQuery, TodoQueryVariables>;
export const TodosDocument = gql`
  query todos($data: GetTodosInputDto!) {
    todos(data: $data) {
      edges {
        ...TodoFragment
      }
      total
    }
  }
  ${TodoFragmentFragmentDoc}
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
