import React from 'react';
import ReactDOM from 'react-dom';
import { Normalize } from 'styled-normalize';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router } from 'react-router-dom';
import 'nes.css/css/nes.min.css';

import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #212529;
    font-family: 'Press Start 2P', cursive;
    color: white;
  }

  * {
    box-sizing: border-box;
  }
`;

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
`;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Normalize />
      <GlobalStyle />
      <DndProvider backend={HTML5Backend}>
        <StyledWrapper>
          <App />
        </StyledWrapper>
      </DndProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
