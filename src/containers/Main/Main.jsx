import CharactersHomePage from "../../components/CharactersHomePage/CharactersHomePage";
import templateImage from "../../assets/images/Estus_Flask_full.webp";
import "./Main.scss";

const Main = () => {

 const NPCinfo = [ {
    id:1,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Current location",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    }, 
    {   
    id:2,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Current location",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    },
    {
    id:3,
    img: templateImage,  
    name: "Character Name",
    //Role:?
    location: "Current location",
    covenant: "Affiliation",
    questline: "Active questline",
    status: "Status"
    } ]

    console.log(NPCinfo);
 


  return (
    <div>
        <CharactersHomePage characterInfo={NPCinfo}/>
    </div>
  )
}

export default Main