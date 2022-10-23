import "./LocationHeader.scss";
import locationImg from "../../assets/images/AnorLondo.jpg";
import { Link } from "react-router-dom";


const LocationHeader = ({ character, location}) => {

  return (
    <Link style={{ textDecoration: "none" }} to={`/locations/${character.location}`} className="location-banner">
        <h2 className="location-banner__title">{location}</h2>
        <img className="location-banner__img" src={locationImg} alt="" />
    </Link>
  )
}

export default LocationHeader