import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import theme from 'styled-theming';

const linkColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const StyledLink = styled(Link)`
  color: ${({ $noDecoration }) => $noDecoration && linkColor};

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    ${({ $noDecoration }) => $noDecoration && 'text-decoration: none;'}
    color: ${({ $noDecoration }) => $noDecoration && linkColor};
  }
`;

const LinkCustom = ({ children, to, noDecoration }) => (
  <StyledLink $noDecoration={noDecoration} to={to}>
    {children}
  </StyledLink>
);

export default LinkCustom;
