import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";
import Profile from "@/pages/Profile";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/product/",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default routes;
