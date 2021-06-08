import styled from 'styled-components/macro';
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
  height: ${({ height }) => `${height}`};
`;

const PixelArt = ({ name, theme, height, alt }) => (
  <StyledPixelArt
    height={height}
    src={pixelArtAssets[name][theme]}
    alt={alt ? alt : name}
  />
);

PixelArt.defaultProps = {
  height: '50px',
  alt: null,
};

PixelArt.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  height: PropTypes.string,
  alt: PropTypes.string,
};

export default PixelArt;
