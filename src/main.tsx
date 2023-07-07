import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import FormLogin from "./components/FormLogin/FormLogin.tsx";
import FormResgister from "./components/FormRegister/FormRegister.tsx";
import Home from "./components/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <FormLogin />,
    children: [
      {
        path: "/",
        element: <FormLogin />,
      },
      {
        path: "/register",
        element: <FormResgister />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
