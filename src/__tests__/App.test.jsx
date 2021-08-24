import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import App from '../App';
import { ThemeContext } from '../context/ThemeContext';
import { AudioContext } from '../context/AudioContext';

const { ResizeObserver } = window;

beforeEach(() => {
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});

test('renders header', () => {
  const history = createMemoryHistory();
  render(
    <ThemeContext>
      <AudioContext>
        <Router history={history}>
          <DndProvider backend={HTML5Backend}>
            <App />
          </DndProvider>
        </Router>
      </AudioContext>
    </ThemeContext>,
  );
  const headerElement = screen.getByText('BATTLESHIPS');
  expect(headerElement).toBeInTheDocument();
});
