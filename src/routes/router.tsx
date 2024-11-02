import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import Initial from "@/pages/initial";

const router = createBrowserRouter([
  {
    path: "/initial",
    element: <Initial />,
  },
  {
    path: "/",
    element: <Initial />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default router;
