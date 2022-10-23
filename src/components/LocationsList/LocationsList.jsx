import LocationHeader from "../LocationHeader/LocationHeader";
import "./LocationsList.scss";


const LocationsList = ({characterInfo}) => {

    const locationJSX = characterInfo.map((character)=> {
        return(
            <div key={character.location}>
                <LocationHeader character={character} location={character.location} />
            </div>
        )
    })

  return (
    <div>
        {locationJSX}
    </div>
  )
}

export default LocationsList