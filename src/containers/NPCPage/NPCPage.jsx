import "./NPCPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";


const NPCPage = ({characterInfo}) => {

const {Id} = useParams();
const navigate = useNavigate();
const [greeting, setGreeting] = useState(null);
const [showForm, setShowForm] = useState(false);

// const getGreetingById = async id => {
//   const response = await fetch(`http://localhost:8080/greeting/${id}`);
//     const greetingData = await response.json();
//     setGreeting(greetingData);
//   }
//   ;

// useEffect(() => {
//   getGreetingById(id);
// }, [id]);


const selectedNPC = characterInfo.filter((character) => character.id == Id)

// const handleUpdateGreeting = async updatedGreeting => {
//   const response = await fetch(`http://localhost:8080/greeting/${id}`, {
//     method: "PUT",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json; charset=utf8",
//     },
//     body: JSON.stringify(updatedGreeting),
// })
//     setGreeting(updatedGreeting);
// };
  


// const handleDeleteGreeting = async () => {
//   const response = await fetch(`http://localhost:8080/greeting/${id}`, {
//     method: "DELETE"
// })
// navigate("/")
// };

// const handleShowForm = () => setShowForm(!showForm);

  return (
    <section className="npc">
    <div className="npc__info">
      <div>
        <h3 className="npc__name">{selectedNPC[0].name}</h3>
        <h4 className="npc__covenant">{selectedNPC[0].covenant}</h4>
      </div>
      <div>
        <img className="npc__image" src={selectedNPC[0].img} alt="" />
      </div>
      <div>
        <h3 className="npc__location">{selectedNPC[0].location}</h3>
        <h4 className="npc__questline">{selectedNPC[0].questline}</h4>
      </div>
    </div>

    <div className="npc__buttons">
      <button>Update</button>
      <button>Delete</button>
    </div>
    {/* {showForm && <Form/>} */}
    </section>
  )
}

export default NPCPage