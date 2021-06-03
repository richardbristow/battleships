import styled from 'styled-components/macro';

import Header from './Header';
import Grid from './Grid';
import Panel from './Panel';

const StyledGridContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const App = () => (
  <>
    <Header />
    <StyledGridContainer>
      <Panel />
      <Grid />
      <Grid />
    </StyledGridContainer>
  </>
);

export default App;
