import React from "react";
import { Link } from "react-router-dom";
import classes from "../Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes.div}>
      <header>
        <div className={`${classes["search-bar"]}`}>
          <input type="text" placeholder="Search..." />
        </div>

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
          </ul>
        </nav>

        <div className={classes.TOSHOP}>
          <Link className={`${classes["TOSHOP-link"]}`} to="/shop">
            Shop
          </Link>
        </div>
      </header>
      <section className={classes.landing}>
        <div className={classes["Home-Block"]}>
          <h1 className={classes.title}>Espresso Oase</h1>
          <p className={classes.subtitle}>by Cameron Meile & Lorena Vennemann</p>
          <Link className={`${classes["TOSHOP"]}`} to="/shop">
            Shop
          </Link>
        </div>
      </section>  
    </div>
  );
};

export default Home;