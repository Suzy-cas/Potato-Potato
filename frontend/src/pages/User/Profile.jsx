import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import profilePic from "../../assets/img/Profile_picture.png";

function Profile() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user === 3) {
      navigate("/login");
    }
  }, [handleAuth, handleLogout]);
  return (
    <section className="profile-container">
      <h1>Bienvenue {user.username}</h1>
      <img src={profilePic} alt="profil" />
      <p>Nom d'utilisateur : {user.username}</p>
      <p>Email : {user.email}</p>
    </section>
  );
}

export default Profile;
