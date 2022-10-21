import './App.scss';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import templateImage from "../src/assets/images/game-background.png";
import Main from './containers/Main/Main';
import Nav from './containers/Nav/Nav';
import NPCPage from './containers/NPCPage/NPCPage';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {

  const NPCinfo = [ {
    id:1,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Current location",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    }, 
    {   
    id:2,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Current location",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    },
    {
    id:3,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Current location",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    }]

    console.log(NPCinfo);
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
            element={<Main characterInfo={NPCinfo} />}>
          </Route>
          <Route path="/characters/:Id"
            element={<NPCPage characterInfo={NPCinfo} />}>
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
