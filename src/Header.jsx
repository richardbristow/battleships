import styled from 'styled-components/macro';
import crosshairRed from './assets/crosshair-red.png';

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 5px;
    height: 2.5em;
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>BATTLESHIPS</h1>
    <img src={crosshairRed} alt="header crosshair" />
  </StyledHeader>
);

export default Header;
