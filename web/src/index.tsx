import './index.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit-icons.min.js';
import 'react-toastify/dist/ReactToastify.css';

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { SearchProvider } from './context';
import { client } from './graphql/client';
import { Navigation } from './navigation/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <SearchProvider>
        <Navigation />
      </SearchProvider>
    </BrowserRouter>
    <ToastContainer position='top-right' />
  </ApolloProvider>,
);
