import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>I am Home Page</h1>
      <Link to={"/orders"}>Open Orders</Link>
    </div>
  );
};

export default Home;
