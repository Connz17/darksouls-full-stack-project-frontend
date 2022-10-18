import "./WelcomePage.scss";
import { Link } from "react-router-dom";
import background from "../../assets/images/title-banner.png"


const WelcomePage = () => {
  return (
    <div className="welcome">
        <img className="welcome__image" src={background} alt="" /> <br />
        <h3 className="welcome__message">"Don't you dare go hollow!"</h3> <br />
        <Link style={{ textDecoration: "none" }} to="/characters">
        <button className="welcome__button">ENTER</button>
        </Link>
    </div>
  )
}

export default WelcomePage
