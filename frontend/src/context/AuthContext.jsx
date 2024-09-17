import { createContext, useMemo, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
import instance from "../services/instance";

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [connectedUser, setConnectedUser] = useState({ is_admin: 3 });

  const handleAuth = async () => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const decodeToken = jwtDecode(getToken);
      const userId = decodeToken.user_id;

      try {
        const { data } = await instance.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`
        );
        setConnectedUser(data);
      } catch (error) {
        console.warn("Une erreur est survenue!", error);
      }
    }
  };

  useEffect(() => {
    handleAuth();
    console.info(connectedUser);
  }, []);

  //  localStorage.removeItem("token");
  // setUser({ is_admin: 3 });

  const handleLogout = () => {
    localStorage.removeItem("token");
    setConnectedUser({ is_admin: 3 });
  };

  const handleTimeOut = () => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const decodedToken = jwtDecode(getToken);

      // Vérifie si le token a expiré
      if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        setConnectedUser({ is_admin: 3 });
        window.location
          .reload()
          .catch(() => console.warn("Une erreur est survenue!"));
      }
      console.info(getToken);
    }
  };
  const userMemo = useMemo(
    () => ({
      connectedUser,
      setConnectedUser,
      handleAuth,
      handleLogout,
      handleTimeOut,
    }),
    [connectedUser, setConnectedUser, handleAuth, handleLogout, handleTimeOut]
  );

  return (
    <AuthContext.Provider value={userMemo}>{children}</AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object.isRequired,
};

export { AuthContext, AuthContextProvider };
