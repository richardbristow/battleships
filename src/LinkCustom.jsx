import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';

const linkColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const StyledLink = styled(Link)`
  ${({ $noDecoration }) =>
    $noDecoration &&
    css`
      color: ${linkColor};
    `}

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    ${({ $noDecoration }) =>
      $noDecoration &&
      css`
        color: ${linkColor};
        text-decoration: none;
      `}
  }
`;

const LinkCustom = ({ children, to, noDecoration }) => (
  <StyledLink $noDecoration={noDecoration} to={to}>
    {children}
  </StyledLink>
);

export default LinkCustom;
