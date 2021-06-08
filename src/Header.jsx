import styled from 'styled-components/macro';

import PixelArt from './PixelArt';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 5px;
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>BATTLESHIPS</h1>
    <PixelArt name="crossHair" alt="header crosshair" height="2.5em" />
  </StyledHeader>
);

export default Header;
