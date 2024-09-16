/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useContext, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import instance from "../services/instance";

import hide from "../assets/picto/hide_pwd.svg";
import show from "../assets/picto/show_pwd.svg";

export default function Register() {
  const { user, handleAuth } = useContext(AuthContext);

  const [isShown, setIsShown] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailCheck, setEmailCheck] = useState(true);
  const [usernameCheck, setUsernameCheck] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    handleAuth(() => {
      if (user.id !== 3) {
        navigate("/");
      }
    }, 100);
  }, []);

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { email, username, password, confirmPassword } = registerInfo;

    if (password !== confirmPassword) {
      return;
    }

    if (
      email === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      return;
    }
    const dataToSend = {
      email,
      username,
      password,
      is_admin: 0,
    };

    // Fetch existing users
    instance
      .get(`/api/users`)
      .then((res) => {
        const existingUsers = res.data;

        // Check if email already exists
        const emailExists = existingUsers.some(
          (newUser) => newUser.email === email
        );
        const userNameExists = existingUsers.some(
          (newUser) => newUser.username === username
        );

        if (emailExists) {
          setEmailCheck(false);
          console.error("Email already exists");
        } else if (userNameExists) {
          setUsernameCheck(false);
          console.error("Username already exists");
        } else {
          instance
            .post("/api/register", dataToSend)
            .then(() => navigate("/connexion"))
            .catch((err) => console.error(err));
          console.info("Registration successful");
          setEmailCheck(true);
          setUsernameCheck(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <section className="register">
      <h2>Inscription</h2>
      <div className="content">
        <form>
          <label> Adresse email </label>
          <input
            type="email"
            name="email"
            placeholder="example@yahoo.fr"
            autoComplete="off"
            value={registerInfo.email}
            onChange={handleChangeRegister}
          />

          {emailCheck ? "" : <p>Désolé cet email est déjà utilisé</p>}
          <label>Nom d'utilisateur </label>
          <input
            type="name"
            name="username"
            placeholder="nom d'utilisateur"
            autoComplete="off"
            value={registerInfo.username}
            onChange={handleChangeRegister}
          />

          {usernameCheck ? (
            ""
          ) : (
            <p>Désolé ce nom d'utilisateur est déjà utilisé</p>
          )}
          <label>Mot de passe</label>
          <input
            type={isShown ? "text" : "password"}
            name="password"
            placeholder="mot de passe"
            autoComplete="off"
            value={registerInfo.password}
            onChange={handleChangeRegister}
          />

          <label>Confirmez le mot de passe</label>
          <input
            type={isShown ? "text" : "password"}
            name="confirmPassword"
            placeholder="confirmez le mot de passe"
            autoComplete="off"
            value={registerInfo.confirmPassword}
            onChange={handleChangeRegister}
          />

          <p>
            <span onClick={() => setIsShown(!isShown)} aria-hidden="true">
              <img
                src={isShown ? hide : show}
                alt={
                  isShown ? "Cacher le mot de passe" : "Voir le mot de passe"
                }
              />
              {isShown ? "Cacher le mot de passe" : "Voir le mot de passe"}
            </span>
          </p>
        </form>
      </div>
      <div className="action">
        <button
          type="button"
          className="primary-button"
          onClick={handleRegister}
        >
          S'inscrire
        </button>
        <p>
          Déjà inscrit ? <Link to="/connexion ">Se connecter </Link>
        </p>
      </div>
    </section>
  );
}
