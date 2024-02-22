import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home.Layout";
import Login from "../pages/Login.Layout";
import Contact from "../pages/Contact.Layout";
import ProtectedView from "./ProtectedView";

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
    path: "/home",
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
    path: "/contact",
    element: (
      <ProtectedView>
        <Contact />
      </ProtectedView>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
