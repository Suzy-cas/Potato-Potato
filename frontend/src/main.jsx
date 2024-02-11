import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import "./main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // loader: async () => {
    //   const res = await fetch(`http://localhost:3310/api/users`);
    //   const data = await res.json();
    //   return data;
    // },
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
