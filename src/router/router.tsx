import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Catalog from "../views/catalog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
]);
