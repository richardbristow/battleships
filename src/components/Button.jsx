import PropTypes from 'prop-types';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';

import PixelArt from './PixelArt';

const buttonTextColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const StyledButton = styled.button`
  ${({ noDecoration }) =>
    noDecoration &&
    css`
      border: none;
      background-color: transparent;
      color: ${buttonTextColor};
      padding: 0px;
      outline: none;
      &:focus {
        outline: none;
      }
    `}
`;

const Button = ({
  label,
  type,
  onClick,
  pixelArt,
  pixelArtHeight,
  pixelArtOverrideTheme,
  noDecoration,
  className,
}) => {
  const buttonClass = type === 'is-normal' ? 'nes-btn' : `nes-btn ${type}`;

  return (
    <StyledButton
      onClick={onClick}
      type="button"
      className={type ? `${className} ${buttonClass}` : className}
      noDecoration={noDecoration}
    >
      {pixelArt && (
        <PixelArt
          name={pixelArt}
          overrideTheme={pixelArtOverrideTheme}
          height={pixelArtHeight}
        />
      )}
      {label}
    </StyledButton>
  );
};

Button.defaultProps = {
  label: null,
  type: null,
  onClick: null,
  pixelArt: null,
  pixelArtHeight: '50px',
  pixelArtOverrideTheme: null,
  noDecoration: false,
  className: null,
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  pixelArt: PropTypes.string,
  pixelArtHeight: PropTypes.string,
  pixelArtOverrideTheme: PropTypes.oneOf(['light', 'dark']),
  noDecoration: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
