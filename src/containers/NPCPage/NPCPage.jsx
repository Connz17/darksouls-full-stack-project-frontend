import "./NPCPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "../../components/Form/Form";
import marker from "../../assets/images/Estus_Flask_full.webp";



const NPCPage = ({templateImage}) => {

const {id} = useParams();
const navigate = useNavigate();
const [character, setCharacter] = useState({});
const [showForm, setShowForm] = useState(false);

const getCharacterById = async id => {
  const response = await fetch(`http://localhost:8080/character/${id}`);
    const characterData = await response.json();
    setCharacter(characterData);
  };
  
useEffect(() => {
  getCharacterById(id);
}, [id]);

if (character.imageUrl == "" || character.imageUrl == null)
      character.imageUrl = templateImage;


const handleUpdate = async updatedCharacter => {
  const result = await fetch(`http://localhost:8080/character/${id}`, {
    method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedCharacter),
    });
    if (result.ok) {
      alert("NPC updated");
      setCharacter(updatedCharacter);
    } else {
      const message = await result.text();
      alert(message);
    }
  };
  


const handleDelete = async () => {
  const result = await fetch(`http://localhost:8080/character/${id}`, {
    method: "DELETE"
})
if (result.ok) {
  alert("NPC deleted");
  navigate("/characters");
} else {
  const message = await result.text();
  alert(message);
}
};

const handleShowForm = () => setShowForm(!showForm);

console.log(character);

  return (
    <section className="npc"> <br />
    <div className="npc__page">
      <div className="npc__info">
        <h3 className="npc__name">{character.characterName}</h3><br />
        <h4 className="npc__covenant">{character.covenant}</h4>
      </div>
      <div>
        <img className="npc__image" src={character.imageUrl} alt="character" />
      </div>
      <div className="npc__info">
        <h3 className="npc__location">{character.location}</h3> <br />
        <div className="npc__quest-box">
          <img className="npc__marker" src={marker} alt="quest marker" />
          <h4 className="npc__questline">{character.questline}</h4>
        </div>
      </div>
    </div>

    <div className="npc__buttons-box">
      <button className="npc__button" onClick={handleShowForm}>Update</button>
      <button className="npc__button" onClick={handleDelete}>Delete</button>
    </div><br />
    {showForm && <Form handleSubmit={handleUpdate} defaultFormState={character}/>}
    </section>
  )
}

export default NPCPage