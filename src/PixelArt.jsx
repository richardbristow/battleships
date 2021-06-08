import styled, { withTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';

import caretRightBlack from './assets/caret-right-black.png';
import caretRightWhite from './assets/caret-right-white.png';
import crosshairRed from './assets/crosshair-red.png';
import sadSmileyWhite from './assets/sad-smiley-white.png';
import sadSmileyBlack from './assets/sad-smiley-black.png';

const pixelArtAssets = {
  caretRight: {
    light: caretRightBlack,
    dark: caretRightWhite,
  },
  sadSmiley: {
    light: sadSmileyBlack,
    dark: sadSmileyWhite,
  },
  crossHair: {
    light: crosshairRed,
    dark: crosshairRed,
  },
};

const StyledPixelArt = styled.img`
  height: ${({ $height }) => `${$height}`};
`;

const PixelArt = ({ name, theme, height, alt, overrideTheme }) => {
  const pixelArtTheme = overrideTheme ? overrideTheme : theme.mode;

  return (
    <StyledPixelArt
      $height={height}
      src={pixelArtAssets[name][pixelArtTheme]}
      alt={alt ? alt : name}
    />
  );
};

PixelArt.defaultProps = {
  height: '50px',
  alt: null,
  overrideTheme: null,
};

PixelArt.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  overrideTheme: PropTypes.oneOf(['light', 'dark']),
  height: PropTypes.string,
  alt: PropTypes.string,
};

export default withTheme(PixelArt);
