import styled from 'styled-components/macro';
import NavLinkCustom from './NavLinkCustom';

const StyledNavbar = styled.nav`
  margin-bottom: 25px;

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0px;
    margin: 0px;
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
