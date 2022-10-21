import CharactersHomePage from "../../components/CharactersHomePage/CharactersHomePage";
import "./Main.scss";

const Main = ({characterInfo}) => {


 


  return (
    <div>
        <CharactersHomePage characterInfo={characterInfo}/>
    </div>
  )
}

export default Main