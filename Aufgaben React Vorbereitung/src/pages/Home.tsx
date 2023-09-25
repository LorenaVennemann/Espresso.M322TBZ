import React from "react";
import { Link } from "react-router-dom";
import classes from "../Home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <nav className={classes.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <h1 className={classes.title}>Espresso Oase</h1>
      <p className={classes.subtitle}>by Cameron Meile & Lorena Vennemann</p>

      <div className={classes.searchBar}>
        <input type="text" placeholder="Search..." />
      </div>

      <Link to="/shop" className={classes.shopButton}>
        Shop
      </Link>
    </div>
  );
};

export default Home;
