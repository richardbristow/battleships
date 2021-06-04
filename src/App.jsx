import styled from 'styled-components/macro';
import { useResizeDetector } from 'react-resize-detector';

import Header from './Header';
import Grid from './Grid';
import Panel from './Panel';

const StyledGameContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledGridContainer = styled.div`
  flex: 80%;
  height: 100%;
  display: flex;
  gap: 20px;
`;

const App = () => {
  const { width, height, ref } = useResizeDetector();

  return (
    <>
      <Header />
      <StyledGameContainer>
        <Panel shipSquareDimensions={{ width, height }} />
        <StyledGridContainer>
          <Grid ref={ref} />
          <Grid />
        </StyledGridContainer>
      </StyledGameContainer>
    </>
  );
};

export default App;
