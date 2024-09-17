import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import profilePic from "../../assets/img/Profile_picture.png";

function Profile() {
  const { handleAuth, handleLogout, connectedUser } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (connectedUser === 3) {
      navigate("/login");
    }
  }, [handleAuth, handleLogout]);
  return (
    <section className="profile-container">
      <h1>Bienvenue {connectedUser.username}</h1>
      <img src={profilePic} alt="profil" />
      <p>Nom d'utilisateur : {connectedUser.username}</p>
      <p>Email : {connectedUser.email}</p>
    </section>
  );
}

export default Profile;
