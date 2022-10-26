import NpcCard from "../NpcCard/NpcCard";
import "./CharacterCardList.scss";


const CharacterCardList = ({characterInfo}) => {

    const npcJSX = characterInfo.map((character)=> {
        return(
            <div key={character.id}>
                <NpcCard character={character} image={character.imageUrl} name={character.characterName} location={character.location} covenant={character.covenant} quest={character.questline} status={character.status}/>
            </div>
        )
    })

  return (
    <div className="display">
        {npcJSX}
    </div>
  )
}

export default CharacterCardList