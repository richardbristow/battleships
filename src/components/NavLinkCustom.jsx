import styled from 'styled-components/macro';
import { useRouteMatch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../keyframes.css';
import LinkCustom from './LinkCustom';
import PixelArt from './PixelArt';
import menuNavigate from '../audio/menu-navigate.wav';
import { useAudio } from '../context/AudioContext';

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
    transform: translate3d(0, 0, 0);
  }
`;

const NavLinkCustom = ({ label, to }) => {
  const { isMuted } = useAudio();

  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  const location = useLocation();

  return (
    <StyledNavLinkCustom
      onClick={() => !match && !isMuted && new Audio(menuNavigate).play()}
    >
      <div>
        {match && (
          <PixelArt
            className={location.state && location.state.prevPath && 'blink'}
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

NavLinkCustom.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default NavLinkCustom;
