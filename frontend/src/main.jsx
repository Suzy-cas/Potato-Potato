import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.scss";

import Error from "./pages/Error";
import Home from "./components/Home";
import App from "./App";
import MainChoise from "./components/MainChoise";
import Recipe from "./components/Recipe";
import Variety from "./components/Variety";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mainchoise", element: <MainChoise /> },
      { path: "/recettes", element: <Recipe /> },
      { path: "/varietes", element: <Variety /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
