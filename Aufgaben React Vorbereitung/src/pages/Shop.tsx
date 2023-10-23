import React from 'react';
import { Link } from 'react-router-dom';
import "../Root.module.css";

const Shop: React.FC = () => {
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
      <h1>Unser Shop</h1>
      <p>Entdecken Sie unsere exklusive Auswahl an Kaffeesorten. Von aromatischen Espressobohnen bis hin zu erlesenen Filterkaffees haben wir für jeden Geschmack etwas dabei. Bestellen Sie jetzt und genießen Sie den perfekten Kaffeegenuss zu Hause.</p>
    </div>
  );
};

export default Shop;