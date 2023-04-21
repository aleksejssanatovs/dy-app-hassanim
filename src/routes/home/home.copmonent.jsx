import "./home.styles.css";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import setDYContext from "../../helpers/dyContext";

const Home = () => {
  useEffect(() => {
    setDYContext("HOMEPAGE", []);
  }, []);
  return (
    <div className="home-container">
      <Link to="shop">START SHOPPING</Link>
    </div>
  );
};

export default Home;
