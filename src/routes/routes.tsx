import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../components/layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <App />,
      },
    ],
  },
]);

export default routes;
