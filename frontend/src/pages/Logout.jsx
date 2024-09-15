import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Logout() {
  const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <section className="log-out">
      <h2>Etes-vous sûr de vouloir vous déconnecter ?</h2>
      <div className="deconnexion-buttons">
        <button
          type="button"
          className="primary-button"
          onClick={() => {
            handleLogout();
            navigate("/");
          }}
        >
          Me déconnecter
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Annuler
        </button>
      </div>
    </section>
  );
}

export default Logout;
