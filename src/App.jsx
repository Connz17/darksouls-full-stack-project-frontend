import './App.scss';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './containers/Nav/Nav';
import NPCPage from './containers/NPCPage/NPCPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Locations from './containers/Locations/Locations';
import SingleLocationPage from './containers/SingleLocationPage/SingleLocationPage';
import CreateCharacter from './containers/CreateCharacter/CreateCharacter';
import CharactersHomePage from './components/CharactersHomePage/CharactersHomePage';
import templateImage from "./assets/images/game-background.png";

function App() {


    
  return (
  <Router>
    <div className="App">
      <header>
      </header>
      <Nav/>
        <Routes>
          <Route path="/characters"
            element={<CharactersHomePage templateImage={templateImage}/>}>
          </Route>
          <Route path="/locations"
            element={<Locations />}>
          </Route>
          <Route path="/characters/add"
            element={<CreateCharacter />}>
          </Route>
          <Route path="/characters/:id"
            element={<NPCPage  templateImage={templateImage}/>}>
          </Route>
          <Route path="/locations/:location"
            element={<SingleLocationPage templateImage={templateImage}/>}>
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
