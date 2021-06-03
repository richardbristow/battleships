import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components/macro';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <GlobalStyle />
    <StyledWrapper>
      <App />
    </StyledWrapper>
  </React.StrictMode>,
  document.getElementById('root'),
);
