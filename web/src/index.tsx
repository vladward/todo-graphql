import './index.css';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit-icons.min.js';

import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { client } from './graphql/client';
import { Navigation } from './navigation/Navigation';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
    <ToastContainer position='bottom-right' />
  </ApolloProvider>,
);
