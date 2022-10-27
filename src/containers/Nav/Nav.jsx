import "./Nav.scss";
import home from "../../assets/images/dark-souls-dark-sign.png";
import start from "../../assets/images/HomewardBone.png";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="navigation-bar">
      <Link style={{ textDecoration: "none" }} to="/characters">
        <div className="navigation-bar__box"> 
          <img className="navigation-bar__box--img" src={start} alt="return home" />
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/locations">
        <div className="navigation-bar__box">
          <h3 className="navigation-bar__title">Locations</h3>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/characters/add">
        <div className="navigation-bar__box" >
          <h3 className="navigation-bar__title">Add NPC</h3>
        </div>
      </Link>
      <Link style={{ textDecoration: "none" }} to="/">
        <div  className="navigation-bar__box">
        <img className="navigation-bar__box--img" src={home} alt="return home" />
        </div>
      </Link>
    </div>
  )
}

export default Nav