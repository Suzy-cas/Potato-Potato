import { useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/menu";
import Connexion from "./components/connexion";

function App() {
  const users = useLoaderData();
  console.info(users);
  return (
    <main className="main">
      <Header />
      <Menu />
      <Connexion />
    </main>
  );
}

export default App;
