import { createGlobalStyle } from 'styled-components/macro';
import theme from 'styled-theming';
import 'nes.css/css/nes.min.css';

const globalBodyBackgroundColor = theme('mode', {
  light: '#fff',
  dark: '#212529',
});

const globalTextColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${globalBodyBackgroundColor};
    font-family: 'Press Start 2P', cursive;
    color: ${globalTextColor};
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
