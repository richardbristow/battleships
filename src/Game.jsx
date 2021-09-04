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
  const shipSquareDimensions = { width, height };

  return (
    <StyledGameWrapper>
      <CommandPanel shipSquareDimensions={shipSquareDimensions} />
      <StyledGridWrapper>
        <Grid
          shipSquareDimensions={shipSquareDimensions}
          type="Player"
          ref={ref}
        />
        <Grid shipSquareDimensions={shipSquareDimensions} type="Opponent" />
      </StyledGridWrapper>
    </StyledGameWrapper>
  );
};

export default Game;
