import { useState } from 'react';
import styled from 'styled-components/macro';
import { useDrag } from 'react-dnd';

const StyledShip = styled.div`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  border-top: 1px solid white;
  cursor: move;
  opacity: ${({ isDragging }) => (isDragging ? '0.5' : '1')};

  div {
    height: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.height - 4) / 10}px`};
    width: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.width - 4) / 10}px`};
    background-color: grey;

    ${({ isVertical }) =>
      isVertical
        ? `
        border-left: 1px solid white;
        border-right: 1px solid white;`
        : `
        border-bottom: 1px solid white;
        &:first-child {
          border-left: 1px solid white;
        };`}

    &:last-child {
      ${({ isVertical }) =>
        isVertical
          ? 'border-bottom: 1px solid white;'
          : 'border-right: 1px solid white;'}
    }
  }
`;

const renderShipSquares = (size) => {
  const shipSquares = [];
  for (let index = 0; index < size; index++) {
    shipSquares.push(<div key={`shipSquare-${index}`} />);
  }
  return shipSquares;
};

const Ship = ({ size, shipSquareDimensions }) => {
  const [isVertical, setIsVertical] = useState(true);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'ship',
    item: { size },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <StyledShip
      onDoubleClick={() => setIsVertical(!isVertical)}
      isVertical={isVertical}
      isDragging={isDragging}
      ref={drag}
      shipSquareDimensions={shipSquareDimensions}
    >
      {renderShipSquares(size)}
    </StyledShip>
  );
};

export default Ship;
