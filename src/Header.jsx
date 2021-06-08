import styled, { withTheme } from 'styled-components/macro';

import PixelArt from './PixelArt';
import Button from './Button';
import { useTheme } from './ThemeContext';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 5px;
  }
`;

const Header = ({ theme }) => {
  const themeToggle = useTheme();

  return (
    <StyledHeader>
      <h1>BATTLESHIPS</h1>
      <PixelArt name="crossHair" alt="header crosshair" height="2.5em" />
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
