import styled from 'styled-components/macro';
import { useRouteMatch } from 'react-router-dom';

import LinkCustom from './LinkCustom';
import PixelArt from './PixelArt';

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
`;

const NavLinkCustom = ({ label, to }) => {
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <StyledNavLinkCustom>
      <div>
        {match && (
          <PixelArt
            name="caretRight"
            alt="selected navigation link"
            height="25px"
          />
        )}
      </div>
      <LinkCustom noDecoration to={to}>
        {label}
      </LinkCustom>
    </StyledNavLinkCustom>
  );
};

export default NavLinkCustom;
