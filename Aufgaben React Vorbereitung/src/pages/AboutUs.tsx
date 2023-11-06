import React from 'react';
import logo from '../logo.svg';
import classes from "../Root.module.css";
import "../Root.module.css";
import { Link } from 'react-router-dom';
import warenkorbImage from '../warenkorb.png';
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

        <section className={classes.image_full}>
          <img src="https://cdn.pixabay.com/photo/2016/04/12/11/19/coffee-1324126_1280.jpg" alt="Coffee Shop" />
          <img className={classes.middle_image} src="https://c8.alamy.com/compde/kb81ft/kunden-kaffee-trinken-abgebildet-am-fenster-des-einen-kaffee-gesellschaft-cafebar-shop-in-bath-somerset-england-grossbritannien-kb81ft.jpg" alt="Coffee Shop Owner" />
        </section>

        <section></section>
        <section></section>
        <section></section>

        <section className={classes.textbox_center}>
          <h1>Das sind Wir!</h1>
          <p>Willkommen in der Expresso Oase, einem Ort, an dem Sie exquisiten Kaffeegenuss und eine Fülle von Aromen entdecken können. Unsere Leidenschaft für Kaffee spiegelt sich in jeder Tasse wider, die unsere erfahrenen Baristas mit Hingabe zubereiten. Von klassischen Kreationen bis hin zu innovativen Spezialitäten bieten wir Ihnen eine vielfältige Auswahl, die Ihre Geschmacksknospen verwöhnen wird.</p>
          <br />
          <p>Neben unserem herausragenden Kaffee legen wir großen Wert auf ein gemütliches Ambiente. Treten Sie ein und lassen Sie den Alltag hinter sich, während Sie sich in unserer Oase der Entspannung wiederfinden. Ob Sie alleine kommen, um in Ruhe eine Tasse Kaffee zu genießen, oder sich mit Freunden treffen möchten, um sich über die neuesten Kaffeetrends auszutauschen, bei uns finden Sie den perfekten Ort dafür.</p>
          <br />
          <p>Und vergessen Sie nicht, unsere feinen Gebäckstücke zu probieren! Frisch gebacken und mit Sorgfalt ausgewählt, ergänzen sie Ihren Kaffeegenuss auf köstliche Weise. Von zarten Croissants über verlockende Kuchen bis hin zu herzhaften Snacks haben wir für jeden Geschmack etwas zu bieten. Lehnen Sie sich zurück, nehmen Sie einen Bissen und lassen Sie sich von den harmonischen Geschmackskombinationen verführen.</p>
          <br />
          <p>Bei Expresso Oase stehen Qualität und Service an erster Stelle. Wir legen großen Wert darauf, dass jeder Kunde sich willkommen und wohl fühlt. Unser freundliches und aufmerksames Personal ist stets bereit, Ihnen bei der Auswahl des perfekten Kaffees oder Gebäcks behilflich zu sein und Ihnen ein unvergessliches Erlebnis zu bieten.</p>
          <br />
          <p>Treten Sie ein, lassen Sie sich verführen und entdecken Sie die Welt des exquisiten Kaffeegenusses in der Expresso Oase. Wir freuen uns darauf, Sie willkommen zu heißen und Ihnen unvergessliche Genussmomente zu bereiten.</p>
        </section>

        <footer className={classes.footer}>
          <h1>Expresso Oase © 2023 ExpressoOase.com</h1>
        </footer>
      </main>
    </div>
  );
};

export default AboutUs;
