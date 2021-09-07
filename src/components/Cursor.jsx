import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';

import '../keyframes.css';

const StyledCursor = styled.span`
  display: inline-block;
  width: 14px;
  height: 20px;
  background-color: #fff;
  ${({ terminalText }) =>
    terminalText &&
    css`
      animation: boxShadow 2s infinite;
    `}
`;

const Cursor = ({ terminalText }) => (
  <StyledCursor terminalText={terminalText} />
);

Cursor.defaultProps = {
  terminalText: false,
};

Cursor.propTypes = {
  terminalText: PropTypes.bool,
};

export default Cursor;
