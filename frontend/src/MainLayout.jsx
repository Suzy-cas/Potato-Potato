import { Outlet } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";

function MainLayout() {
  return (
    <>
      <BurgerMenu />
      <Outlet />
    </>
  );
}

export default MainLayout;
