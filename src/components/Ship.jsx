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

const StyledShipDrag = styled.div`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  cursor: url(${draggerBlackCursor}), move;
  opacity: ${({ isDragging }) => (isDragging ? '0.5' : '1')};
`;

const StyledShipSquare = styled.div`
  height: ${({ shipSquareDimensions }) =>
    shipSquareDimensions && `${shipSquareDimensions.height / 10}px`};
  width: ${({ shipSquareDimensions }) =>
    shipSquareDimensions && `${shipSquareDimensions.width / 10}px`};
  background-color: grey;

  ${({ isVertical }) =>
    isVertical
      ? css`
          &:first-child {
            border-top: 2px solid ${borderColor};
          }
          &:last-child {
            border-bottom: 2px solid ${borderColor};
          }
          border-width: 1px 2px 1px 2px;
          border-style: solid;
          border-color: ${borderColor};
        `
      : css`
          &:first-child {
            border-left: 2px solid ${borderColor};
          }
          &:last-child {
            border-right: 2px solid ${borderColor};
          }
          border-width: 2px 1px 2px 1px;
          border-style: solid;
          border-color: ${borderColor};
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
    <div>
      <StyledShipDrag
        onDoubleClick={() => setIsVertical(!isVertical)}
        isVertical={isVertical}
        isDragging={isDragging}
        ref={drag}
      >
        {[...Array(size).keys()].map((id) => (
          <StyledShipSquare
            shipSquareDimensions={shipSquareDimensions}
            isVertical={isVertical}
            key={`shipSquare-${id}`}
          />
        ))}
      </StyledShipDrag>
    </div>
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
