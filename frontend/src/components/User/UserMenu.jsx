import { Link, Outlet } from "react-router-dom";
import profilePic from "../../assets/picto/Picto_profile.svg";
import addPic from "../../assets/picto/Picto_add.svg";

function UserMenu() {
  return (
    <section className="menu-container">
      <h2>Mon espace</h2>
      <nav>
        <ul>
          <Link className="link-profile" to="profil">
            <img src={profilePic} alt="" /> <h1>Mon profil</h1>
          </Link>
          <Link className="link-profile" to="nouvelle-recette">
            <img src={addPic} alt="" />
            <h1>Ajouter une recette</h1>
          </Link>
        </ul>
      </nav>
      <main className="user-main">
        <Outlet />
      </main>
    </section>
  );
}
export default UserMenu;
