import styled from 'styled-components/macro';
import { useResizeDetector } from 'react-resize-detector';

import Header from './Header';
import Grid from './Grid';
import CommandPanel from './CommandPanel';

const StyledGameWrapper = styled.div`
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
      <StyledGameWrapper>
        <CommandPanel shipSquareDimensions={{ width, height }} />
        <StyledGridContainer>
          <Grid ref={ref} />
          <Grid />
        </StyledGridContainer>
      </StyledGameWrapper>
    </>
  );
};

export default App;
