import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import "./main.scss";

import Error from "./pages/Error";
import Home from "./components/Home";
import MainLayout from "./MainLayout";
import MainChoise from "./components/MainChoise";
import Recipe from "./components/Recipe";
import Variety from "./components/Variety";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import UserLayout from "./components/User/UserLayout";
import NewRecipe from "./pages/User/NewRecipe";
import AdminLayout from "./components/Admin/AdminLayout";
import Profile from "./pages/User/Profile";
import Favorites from "./pages/User/Favorites";
import UserList from "./pages/Admin/UserList";
import RecipeReview from "./pages/Admin/RecipeReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/mainchoise", element: <MainChoise /> },
      { path: "/recettes", element: <Recipe /> },
      { path: "/varietes", element: <Variety /> },
      { path: "/connexion", element: <Login /> },
      { path: "/deconnexion", element: <Logout /> },
    ],
  },
  {
    path: "mon-espace",
    element: <UserLayout />,
    errorElement: <Error />,
    children: [
      { path: "nouvelle-recette", element: <NewRecipe /> },
      { path: "profil", element: <Profile /> },
      { path: "favoris", element: <Favorites /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    errorElement: <Error />,
    children: [
      { path: "nouvelle-recette", element: <NewRecipe /> },
      { path: "utilisateurs", element: <UserList /> },
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
