import styled from 'styled-components/macro';

const StyledShip = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;

  div {
    height: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.height - 4) / 10}px`};
    width: ${({ shipSquareDimensions }) =>
      shipSquareDimensions && `${(shipSquareDimensions.width - 4) / 10}px`};
    background-color: grey;
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
