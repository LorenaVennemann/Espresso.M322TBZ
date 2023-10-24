import React from 'react';
import logo from '../logo.svg';
import classes from "../Root.module.css";
import "../Root.module.css";
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
              <Link to="/about">About Us</Link>
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

      <main>

        <section className={classes.image_full}>
          <img src="https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_1280.jpg" alt="" />
          <img className={classes.middle_image} src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg" alt="" />
        </section>

        <section></section>
        <section></section>

        <section className="textbox-center">
          <h1>Title</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ab mollitia. Iusto culpa blanditiis molestias pariatur, enim dolor, quaerat, qui praesentium mollitia nostrum porro earum suscipit officiis rerum doloremque ut!</p>
        </section>

        <footer className={classes.footer}>
          <h1>Expresso Oase © 2023 ExpressoOase.com</h1>
        </footer>
      </main>
    </div>
  );
};

export default AboutUs;

