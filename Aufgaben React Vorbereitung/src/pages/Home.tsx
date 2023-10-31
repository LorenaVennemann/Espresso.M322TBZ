import React from "react";
import { Link } from "react-router-dom";
import classes from "../Root.module.css";
import "../Root.module.css";
import warenkorbImage from '../warenkorb.png';
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
        <div className={classes.Nav_End}>
          <div className={classes.TOSHOP}>
            <Link className={`${classes["TOSHOP-link"]}`} to="/shop">
              Shop
            </Link>
          </div>
          <div>
            <Link className={classes.Button} to="/warenkorb">
              <img src={warenkorbImage} alt="Warenkorb" />
            </Link>
          </div>
        </div>
      </header>
      <main>

        <section className={classes.image_full}>
          <img src="https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_1280.jpg" alt="" />
        </section>

        <section className={classes.textbox_center}>
          <h1>Willkommen in der Expresso Oase!</h1>
          <p>Entdecken Sie bei uns exquisiten Kaffeegenuss und eine Vielfalt an Aromen. Unsere Baristas bereiten mit Leidenschaft erstklassige Kreationen zu. Genießen Sie das gemütliche Ambiente und probieren Sie unsere feinen Gebäckstücke. Qualität und Service stehen bei uns an erster Stelle. Willkommen in der Expresso Oase – lassen Sie sich verführen!
            <br />Ihr Expresso Oase-Team</p>
          <Link className={`${classes["TOSHOP"]}`} to="/shop">
            Zum Shop
          </Link>
        </section>

        <section></section>

        <section className={classes.four_textboxes}>
          <div className={classes.textbox}>
            <img src="https://kaffeezentrale.com/media/4c/17/b6/1686771659/GV-1-1.jpg" alt="" />
            <h1>ILLYCAFÉ GOURMET VENEZIA</h1>
            <p>100% Arabica. For espresso and café crème Illycafé offers something special.</p>
          </div>
          <div className={classes.textbox}>
            <img src="https://kaffeezentrale.com/media/23/db/09/1687380190/DI04-1.jpg " alt="" />
            <h1>DIEMME MISCELA BLU</h1>
            <p>100% Arabica. Simply unbelievable what is in this Caffè.The alchemists from</p>
          </div>
          <div className={classes.textbox}>
            <img src="https://kaffeezentrale.com/media/a0/5b/14/1687380186/CI02-1.jpg" alt="" />
            <h1>CHICCO D'ORO TRADITION</h1>
            <p>The pleasantly light acidity of this coffee never pushes itself to the fore. The taste</p>
          </div>
          <div className={classes.textbox}>
            <img src="https://kaffeezentrale.com/media/45/25/ce/1687546010/TF01-1.jpg" alt="" />
            <h1>TRE FORZE ESPRESSO</h1>
            <p>95% Arabica. Slowly roasted on an open olive wood fire.Trinacria Since ancient</p>
          </div>
        </section>

        <section></section>

        <footer className={classes.footer}>
          <h1>Expresso Oase © 2023 ExpressoOase.com</h1>
        </footer>

      </main>
    </div>
  );
};

export default Home;