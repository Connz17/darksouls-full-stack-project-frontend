import "./Form.scss";


const Form = () => {
  return (
    <div>
        <h2>Add a new NPC</h2>
        <form action="">
            <input type="text" placeholder="Character name"/>
            <input type="image" src="" alt="" placeholder="Image url"/>
            <input type="text" placeholder="Location"/>
            <input type="text" placeholder="Covenant"/>
            <input type="text" placeholder="Questline"/>
            <input type="text" placeholder="Status"/>
            <button type="submit">ADD NPC</button>
        </form>
    </div>
  )
}

export default Form