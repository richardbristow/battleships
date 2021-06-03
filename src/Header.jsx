import styled from 'styled-components/macro';

import neoNavy from './fonts/neonavy3d.ttf';

const StyledHeader = styled.h1`
  @font-face {
    font-family: 'Neo-Navy3D';
    src: local('Neo-Navy3D'), url(${neoNavy}) format('truetype');
  }

  font-family: 'Neo-Navy3D', sans-serif;
  color: white;
  font-size: 60px;
  text-align: center;
`;

const Header = () => <StyledHeader>BATTLESHIPS</StyledHeader>;

export default Header;
