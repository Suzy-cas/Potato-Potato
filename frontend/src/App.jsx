import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/menu";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <Menu />
      </main>
    </BrowserRouter>
  );
}

export default App;
