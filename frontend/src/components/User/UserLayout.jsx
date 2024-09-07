import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import UserMenu from "./UserMenu";
import BurgerMenu from "../BurgerMenu";
import Unauthorised from "../Unauthorised";
import Profile from "../../pages/User/Profile";

function UserLayout() {
  const { handleAuth, handleLogout, handleTimeOut, user } =
    useContext(AuthContext);
  const [activePage, setActivePage] = useState("home");
  useEffect(() => {
    handleAuth();
  }, [handleAuth, handleLogout, handleTimeOut]);

  const handleChangePage = (page) => {
    setActivePage(page);
  };
  const handleReturnLog = () => {
    switch (user.is_admin) {
      case 0: {
        return (
          <>
            <BurgerMenu />
            <UserMenu
              activePage={activePage}
              handleChangePage={handleChangePage}
            />
            <Profile />
          </>
        );
      }
      default:
        return <Unauthorised />;
    }
  };

  return <>{handleReturnLog()}</>;
}

export default UserLayout;
