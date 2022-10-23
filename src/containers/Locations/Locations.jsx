import LocationsList from "../../components/LocationsList/LocationsList";
import "./Locations.scss";


const Locations = ({characterInfo}) => {
  return (
    <div>
        <LocationsList characterInfo={characterInfo}/>
    </div>
  )
}

export default Locations