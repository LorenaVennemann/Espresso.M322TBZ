import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../Root.module.css";
import "../Root.module.css";
import "../Blog.module.css"
import warenkorbImage from '../warenkorb.png';
const Blog: React.FC = () => {
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
              <Link to="/about">Über Uns</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
            <li>
  <Link to="/warenkorb">
    <img src={warenkorbImage} alt="Warenkorb" />
  </Link>
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
        </section>

        <section>
          <h1>Willkommen auf unserem Blog!</h1>
          <p>Hier finden Sie Neuigkeiten und Updates zu unserem Coffee-Shop sowie interessante Artikel rund um das Thema Kaffee.</p>

          <h2>Der perfekte Kaffee für den Herbst</h2>

          <p>Der Herbst ist da und mit ihm die kühleren Temperaturen und die wunderschönen Farben der Blätter. Was gibt es Schöneres, als an einem kühlen Herbstmorgen eine Tasse heißen Kaffee zu genießen?</p>

          <p>Aber welcher Kaffee ist der beste für den Herbst? Hier sind einige unserer Favoriten:</p>

          <ol>
            <li><strong>Pumpkin Spice Latte:</strong> Dieser klassische Herbstkaffee ist ein Muss für alle, die den Geschmack von Kürbis und Gewürzen lieben. Probieren Sie es mit einem Schuss Vanillesirup für eine zusätzliche Süße.</li>

            <li><strong>Caramel Macchiato:</strong> Dieser cremige Kaffee mit Karamellgeschmack ist perfekt für einen gemütlichen Herbstabend. Fügen Sie etwas Zimt hinzu, um ihm einen Hauch von Würze zu verleihen.</li>

            <li><strong>Chai Latte:</strong> Dieser würzige Tee-Kaffee-Hybrid ist ein weiterer Favorit für den Herbst. Probieren Sie ihn mit einem Schuss Honig für eine natürliche Süße.</li>
          </ol>

          <p>Welcher Kaffee auch immer Sie wählen, vergessen Sie nicht, ihn mit einem leckeren Gebäck zu begleiten. Wir empfehlen unsere hausgemachten Muffins oder Scones.</p>

          <p>Wir hoffen, dass Ihnen diese Empfehlungen gefallen haben. Besuchen Sie uns in unserem Coffee-Shop und probieren Sie unsere Herbstkaffees!</p>
        </section>

        <footer className={classes.footer}>
          <h1>Expresso Oase © 2023 ExpressoOase.com</h1>
        </footer>

      </main>

    </div>
  );
};

export default Blog;
