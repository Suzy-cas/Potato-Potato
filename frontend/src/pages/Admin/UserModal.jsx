/* eslint-disable react/prop-types */
import { useState } from "react";

function UserModal({ user, closeModal, handleUpdate }) {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [isAdmin, setIsAdmin] = useState(user.is_admin);
  const { id } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({ ...user, id, username, email, is_admin: isAdmin });
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="modal-content">
          <h3>Modifier l'utilisateur</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Nom d'utilisateur
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Email
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label>
                Admin
                <input
                  type="checkbox"
                  checked={isAdmin === 1}
                  onChange={(e) => setIsAdmin(e.target.checked ? 1 : 0)}
                />
              </label>
            </div>
            <div>
              <button className="primary-button" type="submit">
                Mettre à jour
              </button>
              <button
                className="secondary-button"
                type="button"
                onClick={closeModal}
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
