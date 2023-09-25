import React from "react";
import { Link } from "react-router-dom";
import classes from "../Home.module.css";

const Home: React.FC = () => {
  return (
    <div className="container">
      <header>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        <nav className="navbar">
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

        <div className="TOSHOP">
          <Link className="TOSHOP-link" to="/shop">
            Shop
          </Link>
        </div>
      </header>

      <div className="body">
        <section className="landing">
          <div className="Home-Block">
            <h1 className="title">Espresso Oase</h1>
            <p className="subtitle">by Cameron Meile & Lorena Vennemann</p>
            <Link to="/shop" className="Link">
              Shop
            </Link>
          </div>
        </section>
        <section></section>
      </div>
    </div>
  );
};

export default Home;