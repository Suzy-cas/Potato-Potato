/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function BurgerMenu() {
  const [showBurger, setShowBurger] = useState(false);
  const { user } = useContext(AuthContext);

  const handleShowBurger = () => {
    setShowBurger(!showBurger);
  };

  useEffect(() => {}, [user]);

  console.info(user.is_admin);
  return (
    <nav className="menu-burger">
      <button
        type="button"
        className="burger-button"
        onClick={handleShowBurger}
      >
        <span className="burger-bar" />
      </button>
      <ul className={`burger-ul${showBurger ? "hidden" : ""}`}>
        <Link to="/">Accueil</Link>
        <Link to="/varietes">Variétés</Link>
        <Link to="/recettes">Recettes</Link>
        <Link to={user.is_admin === 3 ? "/connexion" : "/deconnexion"}>
          {user.is_admin === 3 ? "Connexion" : "Deconnexion"}
        </Link>
        <Link to="/inscription">Inscription</Link>
      </ul>
    </nav>
  );
}
export default BurgerMenu;
