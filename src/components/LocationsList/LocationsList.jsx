import LocationHeader from "../LocationHeader/LocationHeader";
import "./LocationsList.scss";


const LocationsList = ({locationInfo}) => {

    const locationJSX = locationInfo.map((location)=> {
        return(
            <div key={location}>
                <LocationHeader location={location} />
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