import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import theme from 'styled-theming';
import PropTypes from 'prop-types';

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

const LinkCustom = ({ children, to, noDecoration }) => {
  const location = useLocation();

  return (
    <StyledLink
      $noDecoration={noDecoration}
      to={{ pathname: to, state: { prevPath: location.pathname } }}
    >
      {children}
    </StyledLink>
  );
};

LinkCustom.defaultProps = {
  children: null,
  noDecoration: false,
};

LinkCustom.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
  to: PropTypes.string.isRequired,
  noDecoration: PropTypes.bool,
};

export default LinkCustom;
