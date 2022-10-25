import LocationsList from "../../components/LocationsList/LocationsList";
import "./Locations.scss";


const Locations = ({characterInfo}) => {
  return (
    <section className="locations">
        <LocationsList characterInfo={characterInfo}/>
    </section>
  )
}

export default Locations