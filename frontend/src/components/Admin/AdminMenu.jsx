/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, Outlet } from "react-router-dom";

function AdminMenu() {
  return (
    <div className="menu-container">
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
