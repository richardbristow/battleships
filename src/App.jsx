import styled from 'styled-components/macro';
import { useResizeDetector } from 'react-resize-detector';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Grid from './Grid';
import CommandPanel from './CommandPanel';
import Rules from './Rules';
import NavBar from './NavBar';
import NoRoute from './NoRoute';

const StyledGameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const StyledGridWrapper = styled.div`
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
      <NavBar />
      <Switch>
        <Route exact path="/">
          <StyledGameWrapper>
            <CommandPanel shipSquareDimensions={{ width, height }} />
            <StyledGridWrapper>
              <Grid type="Player" ref={ref} />
              <Grid type="Opponent" />
            </StyledGridWrapper>
          </StyledGameWrapper>
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
        <Route path="*">
          <NoRoute />
        </Route>
      </Switch>
    </>
  );
};

export default App;
