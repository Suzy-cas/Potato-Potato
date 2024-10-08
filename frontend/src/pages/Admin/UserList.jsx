import { useState, useEffect, useContext } from "react";
import instance from "../../services/instance";
import UserModal from "./UserModal";

import { AuthContext } from "../../context/AuthContext";

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isDeleteMode, setIsDeleteMode] = useState(false);
  const { connectedUser } = useContext(AuthContext);

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
    setIsDeleteMode(false);
  };

  const openModalDelete = (user) => {
    setSelectedUser(user);
    setIsDeleteMode(true);
    setIsModalOpenDelete(true);
  };

  const closeModalDelete = () => {
    setSelectedUser(null);
    setIsModalOpenDelete(false);
    setIsDeleteMode(false);
  };

  const handleUpdate = (updatedUser) => {
    instance
      .put(`/api/user/${updatedUser.id}`, updatedUser)
      .then(() => {
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

  const handleDelete = (userToDelete) => {
    instance
      .delete(`/api/user/recipe-info/${userToDelete.id}`)
      .then(() => {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.id !== userToDelete.id)
        );
        closeModalDelete();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h3>Liste des utilisateurs</h3>
      <div className="card-container-preview">
        {users.map((user) => (
          <div key={user.id} className="preview-card">
            {connectedUser.id === user.id ? (
              <h4>Mon profil : {user.username}</h4>
            ) : (
              <h4>{user.username}</h4>
            )}

            <br />
            <p>{user.is_admin === 1 ? "Administrateur" : "Utilisateur"}</p>
            <p>{user.email}</p>
            <button
              type="button"
              className="secondary-button"
              onClick={() => openModal(user)}
            >
              Modifier
            </button>
            <button
              type="button"
              className="secondary-button"
              onClick={() => openModalDelete(user)}
            >
              Supprimer
            </button>
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

      {isModalOpenDelete && selectedUser && (
        <UserModal
          user={selectedUser}
          closeModal={closeModalDelete}
          handleDelete={handleDelete}
          isDeleteMode={isDeleteMode}
        />
      )}
    </div>
  );
}

export default UserList;
