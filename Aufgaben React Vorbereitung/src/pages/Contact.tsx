import React from 'react';
import { Link } from 'react-router-dom';
import "../Home.module.css";

const Contact: React.FC = () => {
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
      <h1>Kontakt</h1>
      <p>Haben Sie Fragen, Anregungen oder möchten Sie mit uns in Kontakt treten? Füllen Sie einfach das Kontaktformular aus oder nutzen Sie unsere angegebenen Kontaktdaten. Wir freuen uns darauf, von Ihnen zu hören!</p>
    </div>
  );
};

export default Contact;