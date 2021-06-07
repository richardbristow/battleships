import styled from 'styled-components/macro';

const StyledProgress = styled.progress`
  ${({ dark }) =>
    dark &&
    `
    border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(255,255,255)" /></svg>');
    background-color: #212529;
  `}
`;

const Progress = ({ type, dark, value, max }) => (
  <StyledProgress
    dark={dark}
    className={`nes-progress ${type}`}
    value={value}
    max={max}
  />
);

export default Progress;
