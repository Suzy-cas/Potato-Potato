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
      <p>Désolé, vous n'avez pas accès à cette page</p>
      <Link to="/connexion">
        <button type="button">Se connecter</button>
      </Link>
    </div>
  );
}
export default Unauthorised;
