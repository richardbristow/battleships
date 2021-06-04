import { render, screen } from '@testing-library/react';
import App from './App';

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
  render(<App />);
  const headerElement = screen.getByText('BATTLESHIPS');
  expect(headerElement).toBeInTheDocument();
});
