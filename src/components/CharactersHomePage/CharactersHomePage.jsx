import CharacterCardList from "../CharacterCardList/CharacterCardList";
import SearchBox from "../SearchBox/SearchBox";
import "./CharactersHomePage.scss";


const CharactersHomePage = ({characterInfo}) => {
  return (
    <>
        <div>
            <SearchBox/>
        </div>
        <div>
            <CharacterCardList characterInfo={characterInfo}/>
        </div>
    </>
  )
}

export default CharactersHomePage