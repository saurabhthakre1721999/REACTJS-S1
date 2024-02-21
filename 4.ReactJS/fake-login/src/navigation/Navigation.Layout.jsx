import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.Layout";
import Login from "../pages/Login/Login.Layout";
import Orders from "../pages/Orders/Order.Layout";
import ProtectedView from "../components/templates/ProtectedView/ProtectedView.Component";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedView>
        <Home />
      </ProtectedView>
    ),
  },
  {
    path: "/login",
    element: (
      <ProtectedView>
        <Login />
      </ProtectedView>
    ),
  },
  {
    path: "/orders",
    element: (
      <ProtectedView>
        <Orders />
      </ProtectedView>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
