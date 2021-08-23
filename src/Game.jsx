import styled from 'styled-components/macro';
import { useResizeDetector } from 'react-resize-detector';

import Grid from './components/Grid';
import CommandPanel from './CommandPanel';

const StyledGameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledGridWrapper = styled.div`
  flex: 78%;
  height: 100%;
  display: flex;
  gap: 20px;
`;

const Game = () => {
  const { width, height, ref } = useResizeDetector();

  return (
    <StyledGameWrapper>
      <CommandPanel shipSquareDimensions={{ width, height }} />
      <StyledGridWrapper>
        <Grid type="Player" ref={ref} />
        <Grid type="Opponent" />
      </StyledGridWrapper>
    </StyledGameWrapper>
  );
};

export default Game;
