import "./Form.scss";
import { useState } from "react";
import picture from "../../assets/images/ds-circle-icon.png"


const Form = ({ defaultFormState, handleSubmit }) => {
  const [characters, setCharacters] = useState(defaultFormState);

  const handleValidation = event => {
    event.preventDefault();
    handleSubmit(characters);
  };


  return (
    <div >
        <form className="creation" onSubmit={handleValidation}>
          <label>Character name: 
            <input required className="creation__input" type="text" placeholder="Character name" 
              value={characters.characterName} onInput={event => setCharacters({ ...characters, characterName: event.target.value })}/>
          </label>
          <label>Image URL:
            <input className="creation__input" type="text" placeholder="Image URL" 
              value={characters.imageUrl} onInput={event => setCharacters({ ...characters, imageUrl: event.target.value })}/>
          </label>    
          <label>Location:
            <input required className="creation__input" type="text" placeholder="Location"
              value={characters.location} onInput={event => setCharacters({ ...characters, location: event.target.value })}/>
          </label>    
          <label>Covenant:
            <input required className="creation__input" type="text" placeholder="Covenant"
              value={characters.covenant} onInput={event => setCharacters({ ...characters, covenant: event.target.value })}/>
          </label>    
          <label>Questline:
            <input required className="creation__input" type="text" placeholder="Questline"
              value={characters.questline} onInput={event => setCharacters({ ...characters, questline: event.target.value })}/>
          </label>
          <label>Status:
            <input required className="creation__input" type="text" placeholder="Status"
            value={characters.status} onInput={event => setCharacters({ ...characters, status: event.target.value })}/>
          </label>
          <label>Submit
            <input required className="creation__input--button" type="image" src={picture} alt="Submit" width="130" height="auto"/>
          </label>
        </form>
    </div>
  )
}

export default Form