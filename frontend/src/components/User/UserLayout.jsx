import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";

import UserMenu from "./UserMenu";
import BurgerMenu from "../BurgerMenu";
import Unauthorised from "../Unauthorised";
import Profile from "../../pages/User/Profile";

function UserLayout() {
  const { handleAuth, handleLogout, user } = useContext(AuthContext);

  useEffect(() => {
    handleAuth();
  }, [handleAuth, handleLogout]);

  const handleReturnLog = () => {
    switch (user.is_admin) {
      case 0: {
        return (
          <>
            <BurgerMenu />
            <UserMenu />
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
