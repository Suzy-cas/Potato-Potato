import { createContext, useMemo, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";

const AuthContext = createContext();
function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ is_admin: 3 });

  const handleAuth = async () => {
    const getToken = localStorage.getItem("token");

    if (getToken) {
      const decodeToken = jwtDecode(getToken);
      const userId = decodeToken.user_id;

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/${userId}`
        );
        setUser(data);
      } catch (error) {
        console.warn("Une erreur est survenue!", error);
      }
    }
  };

  useEffect(() => {
    handleAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser({ is_admin: 3 });
  };
  const userMemo = useMemo(
    () => ({
      user,
      setUser,
      handleAuth,
      handleLogout,
    }),
    [user, setUser, handleAuth, handleLogout]
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
