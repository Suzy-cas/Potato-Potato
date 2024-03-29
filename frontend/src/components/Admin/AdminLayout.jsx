import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import AdminMenu from "./AdminMenu";
import BurgerMenu from "../BurgerMenu";
import Unauthorised from "../Unauthorised";

function AdminLayout() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);

  useEffect(() => {}, [handleAuth, handleLogout]);

  const handleReturnLog = () => {
    switch (user.is_admin) {
      case 1: {
        return (
          <>
            <BurgerMenu />
            <AdminMenu />
          </>
        );
      }
      default:
        return <Unauthorised />;
    }
  };

  return <>{handleReturnLog()}</>;
}

export default AdminLayout;
