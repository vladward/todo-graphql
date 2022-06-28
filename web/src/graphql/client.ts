import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client';
import create from 'zustand';

import { API_HOST } from '../constants';

type ErrorType = {
  hasError: boolean;
  error: any;
  date: number | undefined;
};

export const useErrorsStore = create<ErrorType>(() => ({
  hasError: false,
  error: undefined,
  date: undefined,
}));

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    for (const graphQLError of graphQLErrors) {
      console.log('graphQLError: ', graphQLError);

      useErrorsStore.setState({
        hasError: true,
        error: graphQLError,
        date: Date.now(),
      });
    }
  } else if (networkError) {
    console.log('networkError: ', networkError);

    useErrorsStore.setState({
      hasError: true,
      error: networkError,
      date: Date.now(),
    });
  }
});

const httpLink = createUploadLink({
  uri: API_HOST,
});

// const splitLink = split(({ query }) => {
//   const definition = getMainDefinition(query);
//   return (
//     definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
//   );
// }, httpLink);

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            keyArgs: false,
            merge(existing: any, incoming: any) {
              const prevEdges = existing?.edges || [];
              const incomingEdges = incoming?.edges || [];

              return {
                ...incoming,
                edges: [...prevEdges, ...incomingEdges],
              };
            },
          },
        },
      },
    },
  }),
});
