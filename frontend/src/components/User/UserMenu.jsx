/* eslint-disable jsx-a11y/control-has-associated-label */
// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function UserMenu() {
  return (
    <section className="menu-container">
      <h1>Mon espace</h1>
      <nav>
        <ul>
          <Link to="profil">Mon profil</Link>
          <Link to="favoris">Mes Favoris</Link>
          <Link to="nouvelle-recette">Ajouter une recette</Link>
        </ul>
      </nav>
      <main className="user-main">
        <Outlet />
      </main>
    </section>
  );
}
export default UserMenu;
