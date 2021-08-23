import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';

import '../keyframes.css';

const StyledText = styled.div`
  display: flex;
  margin-bottom: 16px;

  p {
    margin: 0px;
  }

  &.passed-elements {
    align-items: center;
  }

  .marker {
    padding-right: 16px;
  }

  ${({ terminalText }) =>
    terminalText &&
    css`
      animation: textShadow 2s infinite;
    `}
`;

const Text = ({
  className,
  marker,
  children,
  textElementTag,
  terminalText,
}) => {
  const CustomElement = textElementTag;
  const isObject = typeof children[children.length - 1] !== 'string';

  return (
    <StyledText
      className={isObject ? `${className} passed-elements` : className}
      terminalText={terminalText}
    >
      {marker && <span className="marker">{marker}</span>}
      {isObject ? (
        <div>{children}</div>
      ) : (
        <CustomElement>{children}</CustomElement>
      )}
    </StyledText>
  );
};

Text.defaultProps = {
  marker: null,
  children: null,
  textElementTag: 'p',
  terminalText: false,
};

Text.propTypes = {
  marker: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  textElementTag: PropTypes.string,
  terminalText: PropTypes.bool,
};

export default Text;
