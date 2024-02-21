import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.Layout";
import Login from "../pages/Login/Login.Layout";
import Orders from "../pages/Orders/Order.Layout";
import ProtectedView from "../components/templates/ProtectedView/ProtectedView.Component";

const wrapperWithProtected = (Uday) => {
  console.log({ Uday });
  return (
    <ProtectedView>
      <Uday />
    </ProtectedView>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: wrapperWithProtected(Home),
  },
  {
    path: "/login",
    element: wrapperWithProtected(Login),
  },
  {
    path: "/orders",
    element: wrapperWithProtected(Orders),
  },
]);

const Navigation = () => {
  return <RouterProvider router={router} />;
};

export default Navigation;
