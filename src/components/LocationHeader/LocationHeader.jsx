import "./LocationHeader.scss";
import locationImg from "../../assets/images/AnorLondo.jpg";
import { Link } from "react-router-dom";


const LocationHeader = ({ location }) => {

  return (
    <> <br />
    <Link style={{ textDecoration: "none" }} to={`/locations/${location}`} className="location-banner">
        <h3 className="location-banner__title">{location}</h3>
        {/* <img className="location-banner__img" src={locationImg} alt="" /> */}
    </Link>
    </> 
  )
}

export default LocationHeader