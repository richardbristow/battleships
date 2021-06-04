import { forwardRef } from 'react';
import styled from 'styled-components/macro';
// import { useResizeDetector } from 'react-resize-detector';

import GridSquare from './GridSquare';

const StyledGrid = styled.div`
  flex: 50%;
  padding: 1px;
  border: 1px solid lightblue;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Grid = forwardRef((_, ref) => (
  <StyledGrid ref={ref}>
    {[...Array(100).keys()].map((_, index) => (
      <GridSquare key={`gridsquare-${index}`} />
    ))}
  </StyledGrid>
));

export default Grid;
