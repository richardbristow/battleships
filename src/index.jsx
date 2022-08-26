import React from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components/macro';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { ThemeContext } from './context/ThemeContext';
import { AudioContext } from './context/AudioContext';

const StyledWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 20px;
`;

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeContext>
      <AudioContext>
        <Router>
          <DndProvider backend={HTML5Backend}>
            <StyledWrapper>
              <App />
            </StyledWrapper>
          </DndProvider>
        </Router>
      </AudioContext>
    </ThemeContext>
  </React.StrictMode>
);
