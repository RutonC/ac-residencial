import React from "react";
import { createBrowserRouter, RouterProvider, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Client from "../components/client";
import About from "../pages/About";
import Admin from "../pages/(admin)";
import Dashboard from "../pages/(admin)/Dashboard";
import Requests from "../pages/(admin)/Requests";
import Address from "../pages/(admin)/Address";
import Profile from "../pages/(admin)/Profile";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
  loader?: () => Promise<any>; // Adapte conforme necessário
}


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/client",
    element: <Client />,
  },
  {
    path: "/admin",
    element: <Admin />,
    children:[
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path:"pedidos",
        element:<Requests/>
      },
      {
        path:"enderecos",
        element:<Address/>
      },
      {
        path:"edit-account",
        element:<Profile/>
      },
    ]
  },
]);

function Route() {
  return <RouterProvider router={router}/>
}

export default Route;
