import { createGlobalStyle } from 'styled-components/macro';
import 'nes.css/css/nes.min.css';

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

export default GlobalStyle;
