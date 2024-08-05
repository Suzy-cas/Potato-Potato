import { useState, useEffect } from "react";
import instance from "../../services/instance";
import UserModal from "./UserModal";

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    instance
      .get("/api/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  const handleUpdate = (updatedUser) => {
    // Appeler l'API pour mettre à jour l'utilisateur
    console.info(updatedUser);
    instance
      .put(`/api/user/${updatedUser.id}`, updatedUser)
      .then(() => {
        // Mettre à jour l'état local avec les nouvelles informations de l'utilisateur
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === updatedUser.id ? updatedUser : user
          )
        );
        closeModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  console.info(users);
  console.info(isModalOpen);
  return (
    <div>
      <h2>Liste des utilisateurs</h2>
      <div className="card-container">
        {users.map((user) => (
          <div key={user.id}>
            <div className="preview-card">
              <h4>{user.username}</h4>
              <p>{user.email}</p>
              <p>{user.is_admin === 1 ? "Administrateur" : "Utilisateur"}</p>
              <button
                type="button"
                className="secondary-button"
                onClick={() => openModal(user)}
              >
                Modifier
              </button>
            </div>
          </div>
        ))}
      </div>
      {isModalOpen && selectedUser && (
        <UserModal
          user={selectedUser}
          closeModal={closeModal}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
}

export default UserList;
