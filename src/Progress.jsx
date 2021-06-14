import styled from 'styled-components/macro';
import theme from 'styled-theming';

const borderImageSource = theme('mode', {
  light: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>')`,
  dark: `url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>')`,
});

const backgroundColor = theme('mode', {
  light: '#fff',
  dark: '#212529',
});

const progressBarColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const StyledProgress = styled.progress`
  border-image-source: ${borderImageSource};
  background-color: ${backgroundColor};

  ::-webkit-progress-bar {
    background-color: ${backgroundColor} !important;
    width: 100%;
  }

  ::-webkit-progress-value {
    background-color: ${progressBarColor} !important;
  }

  ::-moz-progress-bar {
    background-color: ${progressBarColor} !important;
  }

  color: ${progressBarColor};
`;

const Progress = ({ type, value, max }) => (
  <StyledProgress className={`nes-progress ${type}`} value={value} max={max} />
);

export default Progress;
