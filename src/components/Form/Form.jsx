import "./Form.scss";
import picture from "../../assets/images/ds-circle-icon.png"


const Form = () => {
  // const [greeting, setGreeting] = useState(defaultFormState);

  // const handleValidation = event => {
  //   event.preventDefault();

  //   if (Object.values(greeting).some(value => !value)) {
  //     alert("Missing content, unable to proceed");
  //     return;
  //   }

  //   handleSubmit(greeting);
  // };

  return (
    <div >
        <form className="creation" action="">
            <input className="creation__input" type="text" placeholder="Character name"/>
            <input className="creation__input" type="file" name="" id="" accept="image/*"/>
            <input className="creation__input" type="text" placeholder="Location"/>
            <input className="creation__input" type="text" placeholder="Covenant"/>
            <input className="creation__input" type="text" placeholder="Questline"/>
            <input className="creation__input" type="text" placeholder="Status"/>
            <input className="creation__input" type="image" src={picture} alt="Submit" width="50" height="50"/>
        </form>
    </div>
  )
}

export default Form