/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import varietyPic from "../assets/picto/Picto_potato_quest_white.svg";
import recipePic from "../assets/picto/Picto_recipe_white.svg";
import profilePic from "../assets/picto/Picto_profile_white.svg";
import registerPic from "../assets/picto/Picto_add_white.svg";
import homePic from "../assets/picto/Picto_home_white.svg";
import exitPic from "../assets/picto/Picto_exit_white.svg";

function BurgerMenu() {
  const [showBurger, setShowBurger] = useState(true);
  const { connectedUser } = useContext(AuthContext);

  const handleShowBurger = () => {
    setShowBurger(!showBurger);
  };

  useEffect(() => {}, [connectedUser]);

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
        <Link className="link" onClick={handleShowBurger} to="/">
          <img src={homePic} alt="" />
          <h1>Accueil</h1>
        </Link>
        <Link className="link" to="/varietes" onClick={handleShowBurger}>
          <img src={varietyPic} alt="" />
          <h1>Variétés</h1>
        </Link>
        <Link className="link" to="/recettes" onClick={handleShowBurger}>
          <img src={recipePic} alt="" />
          <h1>Recettes</h1>
        </Link>
        {connectedUser.is_admin === 3 ? (
          <Link className="link" to="/inscription" onClick={handleShowBurger}>
            <img src={registerPic} alt="" /> <h1>Inscription</h1>
          </Link>
        ) : (
          <Link
            className="link"
            to={connectedUser === 0 ? "/utilisateur" : "/admin"}
            onClick={handleShowBurger}
          >
            {" "}
            <img src={profilePic} alt="" />
            <h1>Mon espace</h1>
          </Link>
        )}
        <Link
          className="link"
          to={connectedUser.is_admin === 3 ? "/connexion" : "/deconnexion"}
          onClick={connectedUser.is_admin === 3 ? "/connexion" : "/deconnexion"}
        >
          <img
            src={connectedUser.is_admin === 3 ? profilePic : exitPic}
            alt=""
          />
          {connectedUser.is_admin === 3 ? (
            <h1>Connexion</h1>
          ) : (
            <h1>Deconnexion</h1>
          )}
        </Link>
      </ul>
    </nav>
  );
}
export default BurgerMenu;
