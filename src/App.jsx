import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Rules from './Rules';
import NavBar from './NavBar';
import NoRoute from './NoRoute';
import Game from './Game';

const App = () => (
  <>
    <Header />
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Game />
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

export default App;
