import PropTypes from 'prop-types';

import PixelArt from './PixelArt';

const Button = ({
  label,
  type,
  onClick,
  pixelArt,
  pixelArtHeight,
  pixelArtOverrideTheme,
}) => {
  const buttonClass = type === 'is-normal' ? 'nes-btn' : `nes-btn ${type}`;

  return (
    <button onClick={onClick} type="button" className={type && buttonClass}>
      {pixelArt && (
        <PixelArt
          name={pixelArt}
          overrideTheme={pixelArtOverrideTheme}
          height={pixelArtHeight}
        />
      )}
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: null,
  type: null,
  onClick: null,
  pixelArt: null,
  pixelArtHeight: '50px',
  pixelArtOverrideTheme: null,
};

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
  pixelArt: PropTypes.string,
  pixelArtHeight: PropTypes.string,
  pixelArtOverrideTheme: PropTypes.oneOf(['light', 'dark']),
};

export default Button;
