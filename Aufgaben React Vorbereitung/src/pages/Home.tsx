import React from "react";
import { Link } from "react-router-dom";
import classes from "../Root.module.css";
import "../Root.module.css";

const Home: React.FC = () => {
  return (
    <div className={classes.div}>
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
      <main>

        <section className={classes.textbox_center}>
          <h1>Expresso Oase</h1>
          <p>Willkommen in der Oase! Genisessen Sie leckere Bohnen aus Aller Welt.</p>
          <Link className={`${classes["TOSHOP"]}`} to="/shop">
            Zum Shop
          </Link>
        </section>

      </main>
    </div>
  );
};

export default Home;