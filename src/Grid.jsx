import GridSquare from './GridSquare';
import styled from 'styled-components/macro';

const StyledGrid = styled.div`
  flex: 40%;
  padding: 1px;
  border: 1px solid lightblue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Grid = () => (
  <StyledGrid>
    {[...Array(100).keys()].map(() => (
      <GridSquare />
    ))}
  </StyledGrid>
);

export default Grid;
