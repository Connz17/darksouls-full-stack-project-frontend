import { useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import "./CreateCharacter.scss";


const CreateCharacter = () => {
  const navigate = useNavigate();

  const handleSubmit = async character => {
    const result = await fetch("http://localhost:8080/character", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(character),
      });

      if (result.ok) {
        alert("NPC added");
        navigate("/characters");
        window.location.reload();
      } else {
        const message = await result.text();
        alert(message);
      }
    };

    const defaultFormState = { characterName: "", imageUrl: "", location: "", covenant: "", questline: "", status: "" };

  return (
    <section className="create">
        <h2>Add a new NPC</h2> <br />
        <Form defaultFormState={defaultFormState} handleSubmit={handleSubmit}/>
    </section>
  )
}

export default CreateCharacter