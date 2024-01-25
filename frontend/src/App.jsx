import { useLoaderData } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/menu";

function App() {
  const users = useLoaderData();
  console.info(users);
  return (
    <main className="main">
      <Header />
      <Menu />
    </main>
  );
}

export default App;
