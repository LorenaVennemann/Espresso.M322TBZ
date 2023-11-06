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
              <Link to="/about">Über uns</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
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

        <section className={classes.textbox_center}>
          <h1>Kontaktmöglichkeiten</h1>
          <p>Willkommen in der Expresso Oase, einem Ort, an dem Sie exquisiten Kaffeegenuss und eine Fülle von Aromen entdecken können. Unsere Leidenschaft für Kaffee spiegelt sich in jeder Tasse wider, die unsere erfahrenen Baristas mit Hingabe zubereiten. Von klassischen Kreationen bis hin zu innovativen Spezialitäten bieten wir Ihnen eine vielfältige Auswahl, die Ihre Geschmacksknospen verwöhnen wird.</p>
        </section>


        <section className={classes.Formular}>
          <div className={classes.LeftFOrm}>
            <div>
              <h1>Rufen Sie uns an</h1>
              <div>
                <a href="#">+41 019 12 12 13</a>
                <a href="#">+41 019 12 12 13</a>
              </div>
            </div>
            <div>
              <h1>Unserer Standort</h1>
              <div>
                <a href="#">8633, Schaffhausen <br />Zürcherstrasse 17</a>
              </div>
            </div>
            <div>
              <h1>Arbeitszeiten</h1>
              <div>
                <p>Mo-Fr : 6:00 - 19:00</p>
                <p>Sa-So : 6:00 - 23:00</p>
              </div>
            </div>
          </div>
          <div className={classes.FormRight}>
            <form action="#">
              <form action="#">
                <div className={classes.contact_input}>
                  <label htmlFor="reason">Betreff</label>
                  <input type="text" name="reason" id="reason" />
                </div>
                <div className={classes.contact_input}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className={classes.contact_input}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>

                <div className={classes.contact_input}>
                  <label htmlFor="text">Nachricht</label>
                  <input type="text" name="text" id="text" />
                </div>
                <div className={classes.contact_input}>
                  <input type="submit" name="submit" id="submit" />
                </div>
              </form>
            </form>
          </div>
        </section>

        <footer className={classes.footer}>
          <h1>Expresso Oase © 2023 ExpressoOase.com</h1>
        </footer>

      </main>
    </div>
  );
};

export default Home;