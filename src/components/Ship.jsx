import { useState } from 'react';
import styled, { css } from 'styled-components/macro';
import { useDrag } from 'react-dnd';
import theme from 'styled-theming';
import PropTypes from 'prop-types';

import draggerBlackCursor from '../assets/dragger-black-cursor.png';

const borderColor = theme('mode', {
  light: '#212529',
  dark: '#fff',
});

const StyledShip = styled.div`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  border-top: 4px solid ${borderColor};
  cursor: url(${draggerBlackCursor}), move;
  opacity: ${({ isDragging }) => (isDragging ? '0.5' : '1')};

  div {
    height: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.height - 4) / 10}px`};
    width: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.width - 4) / 10}px`};
    background-color: grey;

    ${({ isVertical }) =>
      isVertical
        ? css`
            border-left: 4px solid ${borderColor};
            border-right: 4px solid ${borderColor};
          `
        : css`
            border-bottom: 4px solid ${borderColor};
            &:first-child {
              border-left: 4px solid ${borderColor};
            }
          `}

    &:last-child {
      ${({ isVertical }) =>
        isVertical
          ? css`
              border-bottom: 4px solid ${borderColor};
            `
          : css`
              border-right: 4px solid ${borderColor};
            `}
    }
  }
`;

const StyledShipSquare = styled.div`
  ${({ isVertical }) =>
    isVertical
      ? css`
          border-bottom: 2px solid ${borderColor};
        `
      : css`
          border-right: 2px solid ${borderColor};
        `}
`;

const Ship = ({ shipName, size, shipSquareDimensions }) => {
  const [isVertical, setIsVertical] = useState(true);

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'ship',
      item: { shipName, size, isVertical },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [isVertical]
  );

  return (
    <StyledShip
      onDoubleClick={() => setIsVertical(!isVertical)}
      isVertical={isVertical}
      isDragging={isDragging}
      ref={drag}
      shipSquareDimensions={shipSquareDimensions}
    >
      {[...Array(size).keys()].map((id) => (
        <StyledShipSquare isVertical={isVertical} key={`shipSquare-${id}`} />
      ))}
    </StyledShip>
  );
};

Ship.propTypes = {
  size: PropTypes.number.isRequired,
  shipName: PropTypes.string.isRequired,
  shipSquareDimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }).isRequired,
};

export default Ship;
