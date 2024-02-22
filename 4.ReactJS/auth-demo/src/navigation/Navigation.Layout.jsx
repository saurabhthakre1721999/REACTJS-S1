import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import Home from "../pages/Home.Layout";
import Login from "../pages/Login.Layout";
import Contact from "../pages/Contact.Layout";
import ProtectedView from "./ProtectedView";

export const routesMap = {
  root: "/",
  home: "/home",
  login: "/login",
  contact: "/contact",
};

const router = createBrowserRouter([
  {
    path: routesMap.root,
    element: (
      <ProtectedView>
        <Home />
      </ProtectedView>
    ),
  },
  {
    path: routesMap.home,
    element: (
      <ProtectedView>
        <Home />
      </ProtectedView>
    ),
  },
  {
    path: routesMap.login,
    element: (
      <ProtectedView>
        <Login />
      </ProtectedView>
    ),
  },
  {
    path: routesMap.contact,
    element: (
      <ProtectedView>
        <Contact />
      </ProtectedView>
    ),
  },
  {
    path: "*",
    element: (
      <>
        <h1>Oops! It's 404</h1>
        <div>
          <Link to={routesMap.root}>Go to home</Link>
          <br />
          <Link to={routesMap.login}>Go to Login</Link>
        </div>
      </>
    ),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
