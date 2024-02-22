import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import AdminMenu from "./AdminMenu";
import Potato from "../../assets/img/PW_intro.png";
import BurgerMenu from "../BurgerMenu";

function AdminLayout() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);

  useEffect(() => {}, [handleAuth, handleLogout]);

  const handleReturnLog = () => {
    switch (user.is_admin) {
      case 1: {
        return (
          <>
            <BurgerMenu />
            <AdminMenu />
          </>
        );
      }
      default:
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
  };

  return <>{handleReturnLog()}</>;
}

export default AdminLayout;
