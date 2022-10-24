import "./NPCPage.scss";
import { useParams } from "react-router";
import Form from "../../components/Form/Form";


const NPCPage = ({characterInfo}) => {

const {Id} = useParams();

const selectedNPC = characterInfo.filter((character) => character.id == Id)
  


  return (
    <div className="npc">
    <div>
      <img className="npc__image" src={selectedNPC[0].img} alt="" />
    </div>
    <h2 className="npc__name">{selectedNPC[0].name}</h2>
    <h3 className="npc__info">{selectedNPC[0].location}</h3>
    <h3 className="npc__info">{selectedNPC[0].questline}</h3>
    <h3 className="npc__info">{selectedNPC[0].covenant}</h3>
    <div>
      <button>Update</button>
      <button>Delete</button>
    </div>
    {/* <Form/> */}
    </div>
  )
}

export default NPCPage