import "./Nav.scss";
import home from "../../assets/images/dark-souls-dark-sign.png";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div className="navigation-bar">
      <Link to="/characters">
        <img className="navigation-bar__home" src={home} alt="return home" />
      </Link>
      <Link to="/locations">
        <div>
          <h3>Locations</h3>
        </div>
      </Link>
      <Link to="*">
        <div>
          <h3>Add NPC</h3>
        </div>
      </Link>
      <Link to="*">
        <div>
          <h3>...</h3>
        </div>
      </Link>
    </div>
  )
}

export default Nav