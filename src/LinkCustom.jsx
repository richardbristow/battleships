import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(Link)`
  ${({ $noDecoration }) => $noDecoration && 'color: white;'}

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    ${({ $noDecoration }) =>
      $noDecoration && 'color: white; text-decoration: none;'}
  }
`;

const LinkCustom = ({ children, to, noDecoration }) => (
  <StyledLink $noDecoration={noDecoration} to={to}>
    {children}
  </StyledLink>
);

export default LinkCustom;
