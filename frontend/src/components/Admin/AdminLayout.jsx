import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import AdminMenu from "./AdminMenu";
import BurgerMenu from "../BurgerMenu";
import Unauthorised from "../Unauthorised";

function AdminLayout() {
  const { handleAuth, handleLogout, handleTimeOut, connectedUser } =
    useContext(AuthContext);

  useEffect(() => {}, [handleAuth, handleLogout, handleTimeOut]);

  const handleReturnLog = () => {
    switch (connectedUser.is_admin) {
      case 1: {
        return (
          <>
            <BurgerMenu />
            <AdminMenu />
            <Outlet />
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
