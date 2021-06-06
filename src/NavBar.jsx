import styled from 'styled-components/macro';
import NavLinkCustom from './NavLinkCustom';

const StyledNavbar = styled.nav`
  text-align: center;

  ul {
    list-style-type: none;
  }
`;

const NavBar = () => {
  return (
    <StyledNavbar>
      <ul>
        <NavLinkCustom label="Player vs. Computer" to="/" />
        <NavLinkCustom label="Rules" to="/rules" />
      </ul>
    </StyledNavbar>
  );
};

export default NavBar;
