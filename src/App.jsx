import './App.scss';
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import templateImage from "../src/assets/images/game-background.png";
import Nav from './containers/Nav/Nav';
import NPCPage from './containers/NPCPage/NPCPage';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Locations from './containers/Locations/Locations';
import SingleLocationPage from './containers/SingleLocationPage/SingleLocationPage';
import CreateCharacter from './containers/CreateCharacter/CreateCharacter';
import CharactersHomePage from './components/CharactersHomePage/CharactersHomePage';

function App() {

  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // const getGreetings = async () => {
  //   const response = await fetch("http://localhost:8080/greetings");
  //   const greetingsData = await response.json();
  //   setGreetings(greetingsData);
  //   console.log(greetingsData);
  // };

  useEffect(() => {
    
  }, []);


//   //User search input
//   const handleInput = (event) => {
//     const userInput = event.target.value.toLowerCase();
//     setSearchTerm(userInput);
// };

// // turn the search functions into one pure function that takes variables as arguments
// const searchedBeer = beerArr.filter((beer)=>{
//   const beerName = beer.name.toLowerCase();
//   return beerName.includes(searchTerm);
// })

  const NPCinfo = [ {
    id:1,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Firelink Shrine",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    }, 
    {   
    id:2,
    img: templateImage,  
    name: "Solaire",
    //Role:?
    location: "Anor Londo",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    },
    {
    id:3,
    img: templateImage,  
    name: "Andre",
    //Role:?
    location: "Undead Parish",
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
      <Nav/>
        <Routes>
          <Route path="/characters"
            element={<CharactersHomePage characterInfo={NPCinfo} />}>
          </Route>
          <Route path="/locations"
            element={<Locations characterInfo={NPCinfo} />}>
          </Route>
          <Route path="/characters/add"
            element={<CreateCharacter characterInfo={NPCinfo} />}>
          </Route>
          <Route path="/characters/:Id"
            element={<NPCPage characterInfo={NPCinfo} />}>
          </Route>
          <Route path="/locations/:location"
            element={<SingleLocationPage characterInfo={NPCinfo} />}>
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
