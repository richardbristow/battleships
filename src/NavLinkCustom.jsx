import styled, { withTheme } from 'styled-components/macro';
import { useRouteMatch } from 'react-router-dom';

import LinkCustom from './LinkCustom';
import caretRightWhite from './assets/caret-right-white.png';
import caretRightBlack from './assets/caret-right-black.png';

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

const NavLinkCustom = ({ label, to, theme }) => {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <StyledNavLinkCustom>
      <div>
        {match && theme.mode === 'dark' && (
          <img src={caretRightWhite} alt="selected navigation link" />
        )}
        {match && theme.mode === 'light' && (
          <img src={caretRightBlack} alt="selected navigation link" />
        )}
      </div>
      <LinkCustom noDecoration to={to}>
        {label}
      </LinkCustom>
    </StyledNavLinkCustom>
  );
};

export default withTheme(NavLinkCustom);
