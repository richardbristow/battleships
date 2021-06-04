import styled from 'styled-components/macro';
import { useResizeDetector } from 'react-resize-detector';

import Header from './Header';
import Grid from './Grid';
import Panel from './Panel';

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const App = () => {
  const { width, height, ref } = useResizeDetector();

  return (
    <>
      <Header />
      <StyledGridContainer>
        <Panel shipSquareDimensions={{ width, height }} />
        <Grid ref={ref} />
        <Grid />
      </StyledGridContainer>
    </>
  );
};

export default App;
