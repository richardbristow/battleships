import styled from 'styled-components/macro';
import { Link, useRouteMatch } from 'react-router-dom';

import caretRightWhite from './assets/caret-right-white.png';

const StyledNavLinkCustom = styled.li`
  display: flex;
  align-items: center;
  padding-right: 30px;
  &:last-child {
    padding-right: 0px;
  }

  div {
    width: 25px;
    margin-right: 5px;
  }

  img {
    height: 25px;
  }
`;

const StyledLink = styled(Link)`
  color: white;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }
`;

const NavLinkCustom = ({ label, to }) => {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <StyledNavLinkCustom>
      <div>
        {match && <img src={caretRightWhite} alt="selected navigation link" />}
      </div>
      <StyledLink to={to}>{label}</StyledLink>
    </StyledNavLinkCustom>
  );
};

export default NavLinkCustom;
