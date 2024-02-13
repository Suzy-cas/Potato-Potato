// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

function Logout() {
  //   const { handleLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <section className="login-out">
      <h2>Etes-vous sûr de vouloir vous déconnecter ?</h2>
      <div>
        <button
          type="button"
          onClick={() => {
            // handleLogout();
            navigate("/");
          }}
        >
          Me déconnecter
        </button>
      </div>
    </section>
  );
}

export default Logout;
