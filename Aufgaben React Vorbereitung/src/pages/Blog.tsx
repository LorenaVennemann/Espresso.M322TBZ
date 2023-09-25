import React from 'react';
import { Link } from 'react-router-dom';
import "../Home.css";

const Blog: React.FC = () => {
  return (
    <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
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
      <h1>Blog</h1>
      <p>Willkommen zu unserem Blog! Hier finden Sie interessante Artikel, Tipps und Rezepte rund um das Thema Kaffee. Erfahren Sie mehr über die neuesten Kaffeetrends, Kaffeezubereitungsmethoden und vieles mehr.</p>
    </div>
  );
};

export default Blog;