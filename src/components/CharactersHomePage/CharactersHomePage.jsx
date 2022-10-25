import CharacterCardList from "../CharacterCardList/CharacterCardList";
import SearchBox from "../SearchBox/SearchBox";
import "./CharactersHomePage.scss";



const CharactersHomePage = ({characterInfo}) => {

  


  return (
    <section className="home">
        <div>
            <SearchBox/> <br />
        </div>
        <div>
            <CharacterCardList characterInfo={characterInfo}/>
        </div>
    </section>
  )
}

export default CharactersHomePage