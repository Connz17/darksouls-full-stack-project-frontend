import "./SingleLocationPage.scss";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import NpcCard from "../../components/NpcCard/NpcCard";



const SingleLocationPage = ({templateImage}) => {
    const [characters, setCharacters] = useState([]);
    const {location} = useParams();
    const getCharactersByLocation = async location => {
    const response = await fetch(`http://localhost:8080/characters/?location=${location}`);
    const characterData = await response.json();
    setCharacters(characterData);
    characterData.forEach((character) => {
        if (character.imageUrl == "" || character.imageUrl == null)
        character.imageUrl = templateImage;
        })
    };

useEffect(() => {
    getCharactersByLocation(location);
}, [location]);


    const population = characters.map((character) => {
        if (character.location == location) 
            return(
                <div key={character.id}>
                    <NpcCard character={character} image={character.imageUrl} name={character.characterName} location={character.location} covenant={character.covenant} quest={character.questline} status={character.status}/>
                </div>
            )
    })



return (
    <section className="single-local">
        <div> <br />
            <h1 className="single-local__title">{location}</h1>
        </div><br />
        <div className="single-local__display">
            {population}
        </div>
    </section>
    )
}

export default SingleLocationPage