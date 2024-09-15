/* eslint-disable react/prop-types */
import { Link, Outlet } from "react-router-dom";

import profilePic from "../../assets/picto/Picto_profile.svg";
import addPic from "../../assets/picto/Picto_add.svg";

function UserMenu({ activePage, handleChangePage }) {
  return (
    <div className="menu-container">
      <nav>
        <ul>
          <li>
            <Link
              className={`link-profile ${
                activePage === "profil" ? "active" : ""
              }`}
              to="profil"
              onClick={() => {
                handleChangePage("profil");
              }}
            >
              <img src={profilePic} alt="" /> <h1>Mon profil</h1>
            </Link>
          </li>
          <li>
            <Link className="link-profile" to="nouvelle-recette">
              <img src={addPic} alt="" />
              <h1>Ajouter une recette</h1>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="user-main">
        <Outlet />
      </main>
    </div>
  );
}
export default UserMenu;
