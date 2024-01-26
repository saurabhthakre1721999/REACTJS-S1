import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProductList from "./ProductList/ProductList.Layout";
import ProductDetails from "./ProductDetails/ProductDetails.Layout";
import QueryParams from "../../../Day-10-V2/1.query-params";
import WithQueryParams from "../../../Day-11- Query Params/2.with-query-params";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/details/:meraProductId",
    element: <ProductDetails />,
  },

  {
    path: "/search",
    element: <WithQueryParams />,
  },
]);

const Home = () => {
  return <RouterProvider router={router} />;
};

export default Home;
