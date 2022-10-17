import "./NpcCard.scss";



const NpcCard = ({image, name, location, covenant, quest, status}) => {
  return (
    <div>
        <h2>{name}</h2>
        <div>
            <img src={image} alt="" />
        </div>        
        <h4>{location}</h4>
        <h4>{covenant}</h4>
        <h4>{quest}</h4>
        <h4>{status}</h4>
    </div>
  )
}

export default NpcCard