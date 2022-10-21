import "./NpcCard.scss";
import { Link } from "react-router-dom"




const NpcCard = ({image, name, location, covenant, quest, status, character}) => {
  return (
    <div className="card">
        <Link style={{ textDecoration: "none" }} className="card__link" to={`/characters/${character.id}`}>
        <h2 className="card__heading">{name}</h2><br />
        <div className="card__image">
            <img className="card__image--pic" src={image} alt="NPC"/>
        </div>
        </Link><br />         
        <h4 className="card__location">{location}</h4>
        <br />
        <h5 className="card__info">{status}</h5>
    </div>
  )
}

export default NpcCard