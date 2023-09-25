import React from 'react';
import { Link } from 'react-router-dom';
import "../Home.css";

const AboutUs: React.FC = () => {
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
      <h1>Über uns</h1>
      <p>Wir sind ein leidenschaftliches Team von Kaffeeliebhabern, das sich dem Ziel verschrieben hat, die besten Kaffeesorten aus aller Welt anzubieten. Erfahren Sie mehr über unsere Geschichte und unsere Mission, Ihnen das beste Kaffeeerlebnis zu bieten.</p>
    </div>
  );
};

export default AboutUs;