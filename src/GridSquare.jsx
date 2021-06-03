import styled from 'styled-components/macro';

const StyledGridSquare = styled.div`
  flex: 10%;
  padding-bottom: 10%;
  background-color: lightblue;
  border: 1px solid black;
`;

const GridSquare = () => <StyledGridSquare />;

export default GridSquare;
