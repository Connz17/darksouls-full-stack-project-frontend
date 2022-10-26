import CharacterCardList from "../CharacterCardList/CharacterCardList";
import SearchBox from "../SearchBox/SearchBox";
import { useState, useEffect } from "react";
import "./CharactersHomePage.scss";



const CharactersHomePage = ({templateImage}) => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getCharacters = async () => {
    const response = await fetch("http://localhost:8080/characters");
    const characterData = await response.json();
    setCharacters(characterData);
    characterData.forEach((character) => {
      if (character.imageUrl == "" || character.imageUrl == null)
      character.imageUrl = templateImage;
    })
  };

  useEffect(() => {
    getCharacters();
  }, []);

  //User search input
  const handleInput = (event) => {
    const userInput = event.target.value.toLowerCase();
    setSearchTerm(userInput);
};

const searchedNPC = characters.filter((character)=>{
  const charactersName = character.characterName.toLowerCase();
  return charactersName.includes(searchTerm);
})

console.log(characters);

  return (
    <section className="home">
        <div> <br />
            <SearchBox handleInput={handleInput}/> <br />
        </div>
        <div>
            <CharacterCardList characterInfo={searchedNPC}/>
        </div>
    </section>
  )
}

export default CharactersHomePage