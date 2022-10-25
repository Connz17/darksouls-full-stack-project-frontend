import Form from "../../components/Form/Form";
import "./CreateCharacter.scss";


const CreateCharacter = () => {

  // const handleSubmit = async greeting => {
    //   await fetch("http://localhost:8080/greeting", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(greeting),
    //   });
    // };

    // const defaultFormState = { createdBy: "", greeting: "", originCountry: "", nationality: "" };

  return (
    <section className="create">
        <h2>Add a new NPC</h2> <br />
        <Form/>
    </section>
  )
}

export default CreateCharacter