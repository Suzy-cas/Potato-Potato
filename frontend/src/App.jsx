import { Outlet } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";

function App() {
  return (
    <div>
      <BurgerMenu />
      <Outlet />
    </div>
  );
}

export default App;
