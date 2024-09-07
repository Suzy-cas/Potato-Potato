import { Link } from "react-router-dom";
import Potato from "../assets/img/PW_intro.png";

function Unauthorised() {
  return (
    <div className="access-denied">
      <img
        className="potato_heart"
        src={Potato}
        alt="Pomme de terre qui sourit"
      />
      <h3>Désolé, vous devez vous connecter pour accéder à cette page</h3>
      <Link to="/connexion">
        <button type="button" className="primary-button">
          Se connecter
        </button>
      </Link>
    </div>
  );
}
export default Unauthorised;
