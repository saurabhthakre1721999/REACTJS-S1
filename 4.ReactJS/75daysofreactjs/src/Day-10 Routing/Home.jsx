import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    //document.title = "Varun | Store";
    console.log("Home is mounted");

    return () => {
      console.log("Home is Unmounted");
    };
  }, []);

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Varun | Home | From Helment</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <h1>Welcome to Home</h1>
      <hr />
      <Link to="/about">Go to About</Link>
      <br />
      <Link to="/contact">Go to Contact</Link>
    </div>
  );
};

export default Home;
