import './App.scss';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';
import NPCPage from './containers/NPCPage/NPCPage';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
  <Router>
    <div className="App">
      <header>
      </header>
      <Link to="/characters">
      <Nav/>
      </Link>
        <Routes>
          <Route path="/characters"
            element={<Main/>}>
          </Route>
          <Route path="/characters/:charactersid"
            element={<NPCPage/>}>
          </Route>
          <Route path="/"
            element={<WelcomePage/>}>
          </Route>
        </Routes>
      <footer>
      </footer>
    </div>
  </Router>
  );
}

export default App;
