import styled from 'styled-components/macro';
import { useRouteMatch } from 'react-router-dom';

import './keyframes.css';
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

  .blink {
    animation: blink 1s step-start 0.5s 2;
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
            className="blink"
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
