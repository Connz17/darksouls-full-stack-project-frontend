import LocationsList from "../../components/LocationsList/LocationsList";
import { useState, useEffect } from "react";
import "./Locations.scss";


const Locations = () => {
  const [locations, setLocations] = useState([]);

  const getLocations = async () => {
    const response = await fetch("http://localhost:8080/characters/locations");
    const locationData = await response.json();
    setLocations(locationData);
    
  };
  console.log(locations);

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <section className="locations">
        <LocationsList locationInfo={locations}/>
    </section>
  )
}

export default Locations