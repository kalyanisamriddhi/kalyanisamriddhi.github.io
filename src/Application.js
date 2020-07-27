import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from "react-helmet";

import { config } from './config'
import { client } from './Utils/apollo';
import Router from './Router';

const Application = () => {

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={config.description} />
        <meta name="theme-color" content="#09cc7f" />
      </Helmet>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </>
  )
};

export default Application;