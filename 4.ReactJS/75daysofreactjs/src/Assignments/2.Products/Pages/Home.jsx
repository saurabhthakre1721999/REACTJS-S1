import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./ProductList/ProductList.Layout";
import ProductDetails from "./ProductDetails/ProductDetails.Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/details/:meraProductId",
    element: <ProductDetails />,
  },
]);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
