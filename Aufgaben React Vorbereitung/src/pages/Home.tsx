import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";

const Home: React.FC = () => {
  return (
    <div>
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
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>

      <h1 className="title">Espresso Oase</h1>
      <p className="subtitle">by Cameron Meile & Lorena Vennemann</p>

      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>

      <Link to="/shop" className="shop-button">
        Shop
      </Link>
    </div>
  );
};

export default Home;