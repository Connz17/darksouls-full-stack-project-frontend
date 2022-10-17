import CharactersHomePage from "../../components/CharactersHomePage/CharactersHomePage";
import "./Main.scss";


const Main = () => {

 const NPCinfo ={
    //img?:
    Name: "Character Name",
    //Role:?
    Location: "Current location",
    Covenant: "Affiliation",
    Questline: "Active questline",
    Status: "Status",
    }


  return (
    <div>
        <CharactersHomePage characterInfo={NPCinfo}/>
    </div>
  )
}

export default Main