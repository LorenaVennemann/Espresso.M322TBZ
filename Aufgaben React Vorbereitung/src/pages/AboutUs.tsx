import React from 'react';
import logo from '../Logo.svg';
import classes from '../AboutUs.module.css';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className={classes.app}>
      <header className={classes.header}>
        <nav className={classes.navbar}>
          <div className={classes.navbarName}>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Shop</Link>
          </div>
        </nav>
      </header>
      <div className={classes.upper}>
        <h1 className={classes.title}>About Us</h1>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Espresso Oasis" />
        </div>
        <div className={classes.content} style={{ margin: 'auto', maxWidth: '600px' }}>
          <p style={{ textAlign: 'center', fontSize: '1.2em', color: 'black' }}>
            Willkommen bei Espresso Oasis – Ihrem Ziel für Espresso-Genuss. Wir sind leidenschaftliche Espresso-Enthusiasten und bieten Ihnen erstklassige Espresso-Produkte sowie unser Expertenwissen. Entdecken Sie bei uns die faszinierende Welt des Espressos und verfeinern Sie Ihr Kaffeeerlebnis. Vertrauen Sie auf unsere langjährige Leidenschaft und Erfahrung, um den perfekten Espresso-Genuss zu garantieren. Tauchen Sie ein in unsere Welt des aromatischen Kaffeegenusses!
          </p>
        </div>
      </div>
      <div className={classes.lower}></div>
    </div>
  );
};

export default AboutUs;

