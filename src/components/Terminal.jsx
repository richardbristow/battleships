import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import '../keyframes.css';

const StyledTerminal = styled.div`
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    top: 14px;
    left: 4px;
    bottom: 4px;
    right: 4px;
    background: linear-gradient(
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
      ),
      linear-gradient(
        90deg,
        rgba(255, 0, 0, 0.06),
        rgba(0, 255, 0, 0.02),
        rgba(0, 0, 255, 0.06)
      );
    background-size: 100% 2px, 3px 100%;
    z-index: 2;
    pointer-events: none;
  }
`;

const StyledScanline = styled.div`
  width: 100%;
  height: 100px;
  z-index: 8;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(255, 255, 255, 0.2) 10%,
    rgba(0, 0, 0, 0.1) 100%
  );
  opacity: 0.1;
  position: absolute;
  bottom: 100%;
  animation: scanline 8s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Terminal = ({ children, scanline }) => (
  <StyledTerminal>
    {scanline && <StyledScanline />}
    {children}
  </StyledTerminal>
);

Terminal.defaultProps = {
  children: null,
  scanline: false,
};

Terminal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  scanline: PropTypes.bool,
};

export default Terminal;
