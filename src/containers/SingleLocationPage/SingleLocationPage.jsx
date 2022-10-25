import "./SingleLocationPage.scss";
import { useParams } from "react-router";
import NpcCard from "../../components/NpcCard/NpcCard";


const SingleLocationPage = ({characterInfo}) => {

    const {location} = useParams();

    const selectedLocation = characterInfo.filter((character) => character.location == location)

    const population = characterInfo.map((character) =>{
       if (character.location == selectedLocation[0].location) 
        return(
            <div key={character.id}>
                <NpcCard character={character} image={character.img} name={character.name} location={character.location} covenant={character.covenant} quest={character.questline} status={character.status}/>
            </div>
        )
    })

    console.log(selectedLocation[0]);


  return (
    <section className="singlelocal">
        <div>
            <h1>{selectedLocation[0].location}</h1>
        </div>
        <div className="singlelocal__display">
            {population}
        </div>
    </section>
  )
}

export default SingleLocationPage