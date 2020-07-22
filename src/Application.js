import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks';
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";

import { config } from './config'
import { client } from './Utils/apollo';
import Router from './Router';
import Toggle from "./Components/Theme/Toggler";
import { GlobalStyles } from "./Components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Theme/Theme";
import { useDarkMode } from "./Components/Theme/useDarkMode";

const Application = () => {
  const [theme, themeToggler] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
      <Helmet>
        <title>{config.title}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={config.subtitle} />
        <meta name="theme-color" content={config.header.backgroundColor} />
      </Helmet>
      <ApolloProvider client={client}>
        <ThemeProvider theme={themeMode} toggleTheme={themeToggler}>
          <GlobalStyles />
          <Router />
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
};

export default Application;