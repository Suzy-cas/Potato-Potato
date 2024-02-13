import { useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { handleAuth } = useContext(AuthContext);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const redirectTo = async () => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      const decodeToken = jwtDecode(getToken);
      const userId = decodeToken.user_id;

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`
        );

        if (data.isa_dmin === 1) {
          return navigate("/user/admin");
        }
      } catch (error) {
        console.warn("Une erreur est survenue!", error);
      }
    }
    return navigate("/");
  };

  const handleLoginRegister = (event) => {
    const { name, value } = event.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  // créer la fonction handleLogin avec ses filtres pour vérifier que tous les champs sont remplis et que l'adresse mail n'existe pas déjà
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginInfo;

    if (email === "" || password === "") {
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        loginInfo
      );
      await localStorage.setItem("token", res.data.token);
      await handleAuth();
      redirectTo();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="login-out">
      <header>
        <div>
          <div>
            <h2>Connexion</h2>
          </div>
        </div>
        <p>
          Tu n'as pas encore de compte ?{" "}
          <Link to="/inscription ">Créer le maintenant ! </Link>
        </p>
      </header>
      <main className="content">
        <form>
          <input
            type="text"
            name="email"
            placeholder="votremail@gmail.com"
            value={loginInfo.email}
            onChange={handleLoginRegister}
          />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            value={loginInfo.password}
            onChange={handleLoginRegister}
          />
        </form>
      </main>
      <div className="action">
        <button type="button" onClick={handleLogin}>
          Se connecter
        </button>
      </div>
    </section>
  );
}

export default Login;
