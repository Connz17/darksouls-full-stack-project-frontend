import "./WelcomePage.scss";
import { Link } from "react-router-dom";
import background from "../../assets/images/title-banner.png"
import bonfire from "../../assets/images/bonfire.png"


const WelcomePage = () => {
  return (
    <div className="welcome">
        <img className="welcome__image" src={background} alt="" /><br />
        <img  className="welcome__icon" src={bonfire} alt="bonfire" />
        <h2 className="welcome__message">"Don't you dare go hollow!"</h2> <br />
        <Link style={{ textDecoration: "none" }} to="/characters">
        <button className="welcome__button">ENTER</button>
        </Link>
    </div>
  )
}

export default WelcomePage
