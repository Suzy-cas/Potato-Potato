/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import { Link } from "react-router-dom";

function BurgerMenu() {
  const [showBurger, setShowBurger] = useState(false);

  const handleShowBurger = () => {
    setShowBurger(!showBurger);
  };

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
        <Link to="/connexion">Connexion</Link>
        <Link to="/inscription">Inscription</Link>
      </ul>
    </nav>
  );
}
export default BurgerMenu;
