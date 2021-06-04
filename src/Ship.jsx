import styled from 'styled-components/macro';

const StyledShip = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid white;

  div {
    height: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.height - 4) / 10}px`};
    width: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.width - 4) / 10}px`};
    background-color: grey;

    border-left: 1px solid white;
    border-right: 1px solid white;

    &:last-child {
      border-bottom: 1px solid white;
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

const Ship = ({ size, shipSquareDimensions }) => (
  <StyledShip shipSquareDimensions={shipSquareDimensions}>
    {renderShipSquares(size)}
  </StyledShip>
);

export default Ship;
