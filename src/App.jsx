import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Rules from './Rules';
import NavBar from './components/NavBar';
import NoRoute from './NoRoute';
import Game from './Game';

const App = () => (
  <>
    <Header />
    <NavBar />
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="*" element={<NoRoute />} />
    </Routes>
  </>
);

export default App;
