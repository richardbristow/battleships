import styled, { withTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';

import caretRightBlack from '../assets/caret-right-black.png';
import caretRightWhite from '../assets/caret-right-white.png';
import crosshairRed from '../assets/crosshair-red.png';
import sadSmileyWhite from '../assets/sad-smiley-white.png';
import sadSmileyBlack from '../assets/sad-smiley-black.png';
import moonWhite from '../assets/moon-white.png';
import moonBlack from '../assets/moon-black.png';
import sunWhite from '../assets/sun-white.png';
import sunBlack from '../assets/sun-black.png';
import speakerSoundBlack from '../assets/speaker-sound-black.png';
import speakerSoundWhite from '../assets/speaker-sound-white.png';
import speakerMutedWhite from '../assets/speaker-muted-white.png';
import speakerMutedBlack from '../assets/speaker-muted-black.png';

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
  moon: {
    light: moonBlack,
    dark: moonWhite,
  },
  sun: {
    light: sunBlack,
    dark: sunWhite,
  },
  speakerSound: {
    light: speakerSoundBlack,
    dark: speakerSoundWhite,
  },
  speakerMuted: {
    light: speakerMutedBlack,
    dark: speakerMutedWhite,
  },
};

const StyledPixelArt = styled.img`
  height: ${({ $height }) => `${$height}`};
`;

const PixelArt = ({ className, name, theme, height, alt, overrideTheme }) => {
  const pixelArtTheme = overrideTheme ? overrideTheme : theme.mode;

  return (
    <StyledPixelArt
      className={className}
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
  className: null,
};

PixelArt.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.shape({ mode: PropTypes.string }).isRequired,
  overrideTheme: PropTypes.oneOf(['light', 'dark']),
  height: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default withTheme(PixelArt);
