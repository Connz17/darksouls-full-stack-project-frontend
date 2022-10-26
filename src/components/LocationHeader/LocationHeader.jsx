import "./LocationHeader.scss";
import locationMarker from "../../assets/images/sun-bro.png";
import { Link } from "react-router-dom";


const LocationHeader = ({ location }) => {

  return (
    <> <br />
    <Link style={{ textDecoration: "none" }} to={`/locations/${location}`} className="location">
      <div className="location__banner">
        <img className="location__banner-marker" src={locationMarker} alt="Marker" />
        <h3 className="location__banner-title">{location}</h3>
      </div>
    </Link>
    </> 
  )
}

export default LocationHeader