import React from 'react';
import logo from '../Logo.svg';
import classes from '../AboutUs.module.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className={classes.app}>
      <nav className={classes.navbar}>
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
      <div className={classes.upper}>
        <h1 className={classes.title}>About Us</h1>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Espresso Oasis" />
        </div>
        <div className={classes.content} style={{ margin: 'auto', maxWidth: '600px' }}>
          <p style={{ textAlign: 'center', fontSize: '1.2em' }}>
            Willkommen bei Espresso Oasis – Ihrem Ziel für Espresso-Genuss. Wir sind leidenschaftliche Espresso-Enthusiasten und bieten Ihnen erstklassige Espresso-Produkte sowie unser Expertenwissen. Entdecken Sie bei uns die faszinierende Welt des Espressos und verfeinern Sie Ihr Kaffeeerlebnis. Vertrauen Sie auf unsere langjährige Leidenschaft und Erfahrung, um den perfekten Espresso-Genuss zu garantieren. Tauchen Sie ein in unsere Welt des aromatischen Kaffeegenusses!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;


