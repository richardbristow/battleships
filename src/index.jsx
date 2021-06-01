import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components/macro';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
