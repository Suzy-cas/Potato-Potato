/* eslint-disable jsx-a11y/control-has-associated-label */
// import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="menu-container">
      <h2>Tableau de bord</h2>
      <nav>
        <ul>
          <li>
            <Link to="utilisateurs">
              <h1>Gestion des utilisateurs</h1>
            </Link>
          </li>
          <Link to="recettes-approbation">
            <h1>Gestions des recettes</h1>
          </Link>
        </ul>
      </nav>
      <main className="user-main">
        <Outlet />
      </main>
    </div>
  );
}
export default AdminMenu;
