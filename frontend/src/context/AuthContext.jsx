import { createContext, useMemo, useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
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

export { AuthContext, AuthContextProvider };
