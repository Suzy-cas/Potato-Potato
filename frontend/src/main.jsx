import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import "./main.scss";

import Error from "./pages/Error";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import Recipe from "./pages/Recipe";
import Variety from "./pages/Variety";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserLayout from "./components/User/UserLayout";
import NewRecipe from "./pages/User/NewRecipe";
import AdminLayout from "./components/Admin/AdminLayout";
import Profile from "./pages/User/Profile";
import RecipeReview from "./pages/Admin/RecipeReview";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/recettes", element: <Recipe /> },
      { path: "/varietes", element: <Variety /> },
      { path: "/connexion", element: <Login /> },
      { path: "/deconnexion", element: <Logout /> },
      { path: "/inscription", element: <Register /> },
    ],
  },
  {
    path: "mon-espace",
    element: <UserLayout />,
    errorElement: <Error />,
    children: [
      { path: "nouvelle-recette", element: <NewRecipe /> },
      { path: "profil", element: <Profile /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [
      { path: "nouvelle-recette", element: <NewRecipe /> },
      { path: "recettes-review", element: <RecipeReview /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
