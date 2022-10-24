import "./Nav.scss";
import home from "../../assets/images/dark-souls-dark-sign.png";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="navigation-bar">
      <Link to="/characters">
        <div className="navigation-bar__box"> 
          <img className="navigation-bar__box--img" src={home} alt="return home" />
        </div>
      </Link>
      <Link  to="/locations">
        <div className="navigation-bar__box">
          <h3>Locations</h3>
        </div>
      </Link>
      <Link to="/characters/add">
        <div className="navigation-bar__box" >
          <h3>Add NPC</h3>
        </div>
      </Link>
      <Link to="/">
        <div  className="navigation-bar__box">
          <h3>...</h3>
        </div>
      </Link>
    </div>
  )
}

export default Nav