import "./NPCPage.scss";
import { useParams } from "react-router";


const NPCPage = ({characterInfo}) => {

const {Id} = useParams();

const selectedNPC = characterInfo.filter((character) => character.id == Id)
  


  return (
    <>
    <div>
      <img src={selectedNPC[0].img} alt="" />
    </div>
    <h2>{selectedNPC[0].name}</h2>
    <h3>{selectedNPC[0].location}</h3>
    <h3>{selectedNPC[0].questline}</h3>
    <h3>{selectedNPC[0].covenant}</h3>
    </>
  )
}

export default NPCPage