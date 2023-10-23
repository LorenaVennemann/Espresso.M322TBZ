import React from 'react';
import logo from '../logo.svg';
import classes from '../Header.module.css';
import "../Header.module.css"
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className={classes.app}>
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
      <section>
        <div className="textbox-center">
          <h1>Title</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ab mollitia. Iusto culpa blanditiis molestias pariatur, enim dolor, quaerat, qui praesentium mollitia nostrum porro earum suscipit officiis rerum doloremque ut!</p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

