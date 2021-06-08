import { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './GlobalStyle';

const ThemeToggleContext = createContext();

const useTheme = () => useContext(ThemeToggleContext);

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState({
    mode: 'dark',
  });

  const toggle = () => {
    const mode = theme.mode === 'dark' ? 'light' : 'dark';
    setTheme({ mode: mode });
  };

  return (
    <ThemeToggleContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider theme={theme}>
        <Normalize />
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeToggleContext.Provider>
  );
};

export { useTheme, ThemeContext };
