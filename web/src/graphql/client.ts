import { ApolloClient, ApolloLink, InMemoryCache, split } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { createUploadLink } from 'apollo-upload-client';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import create from 'zustand';

import { API_HOST, WS_HOST } from '../constants';

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

const wsLink = new WebSocketLink(
  new SubscriptionClient(WS_HOST, {
    reconnect: true,
  }),
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' && definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, splitLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          todos: {
            //can take keyArgs if is need
            keyArgs: ['skip'],
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
