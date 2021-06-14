import styled, { withTheme } from 'styled-components/macro';

import PixelArt from './PixelArt';
import Button from './Button';
import { useTheme } from './ThemeContext';
import { useAudio } from './AudioContext';

const StyledHeader = styled.div`
  display: flex;

  div {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  }

  h1 {
    display: inline-block;
  }

  img {
    margin-left: 5px;
  }

  button {
    margin-right: 15px;
    &:last-child {
      margin-right: 0px;
    }
  }
`;

const Header = ({ theme }) => {
  const themeToggle = useTheme();
  const audio = useAudio();

  return (
    <StyledHeader>
      <div>
        <h1>BATTLESHIPS</h1>
        <PixelArt name="crossHair" alt="header crosshair" height="2.5em" />
      </div>
      <Button
        onClick={() => audio.toggle()}
        pixelArt={audio.isMuted ? 'speakerMuted' : 'speakerSound'}
        pixelArtHeight="1.5em"
        noDecoration
      />
      <Button
        onClick={() => themeToggle.toggle()}
        pixelArt={theme.mode === 'dark' ? 'sun' : 'moon'}
        pixelArtHeight="1.5em"
        noDecoration
      />
    </StyledHeader>
  );
};

export default withTheme(Header);
