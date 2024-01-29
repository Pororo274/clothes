import { createBrowserRouter } from "react-router-dom";
import Home from "../views/home";
import Catalog from "../views/catalog";
import App from "../App";
import Product from "../views/product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/products/:productId",
        element: <Product />,
      },
    ],
  },
]);
