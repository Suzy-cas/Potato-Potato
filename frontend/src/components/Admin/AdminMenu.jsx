/* eslint-disable jsx-a11y/control-has-associated-label */
// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function AdminMenu() {
  return (
    <section className="menu-container">
      <h1>TAbleau de bord</h1>
      <nav>
        <ul>
          <Link to="/">Accueil</Link>
          <Link to="utilisateurs">Utilisateurs</Link>
          <Link to="recettes-review">Recettes</Link>
          <Link to="/deconnexion">Deconnexion</Link>
        </ul>
      </nav>
      <main className="user-main">
        <Outlet />
      </main>
    </section>
  );
}
export default AdminMenu;
