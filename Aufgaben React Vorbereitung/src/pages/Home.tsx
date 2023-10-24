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
        </section>

        <section className={classes.textbox_center}>
          <h1>Willkommen in der Expresso Oase!</h1>
          <p>Entdecken Sie bei uns exquisiten Kaffeegenuss und eine Vielfalt an Aromen. Unsere Baristas bereiten mit Leidenschaft erstklassige Kreationen zu. Genießen Sie das gemütliche Ambiente und probieren Sie unsere feinen Gebäckstücke. Qualität und Service stehen bei uns an erster Stelle. Willkommen in der Expresso Oase – lassen Sie sich verführen!
            <br />Ihr Expresso Oase-Team</p>
          <Link className={`${classes["TOSHOP"]}`} to="/shop">
            Zum Shop
          </Link>
        </section>

        <section className={classes.four_textboxes}>
          <div className={classes.textbox}>
            <img src="https://cdn.pixabay.com/photo/2016/03/30/21/59/coffee-beans-1291656_1280.jpg" alt="" />
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minima illo dolor natus, ipsa voluptates suscipit blanditiis exercitationem excepturi distinctio possimus quasi asperiores facere architecto officia recusandae atque fuga. Aperiam.</p>
          </div>
          <div className={classes.textbox}>
            <img src="https://cdn.pixabay.com/photo/2016/03/30/21/59/coffee-beans-1291656_1280.jpg" alt="" />
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minima illo dolor natus, ipsa voluptates suscipit blanditiis exercitationem excepturi distinctio possimus quasi asperiores facere architecto officia recusandae atque fuga. Aperiam.</p>
          </div>
          <div className={classes.textbox}>
            <img src="https://cdn.pixabay.com/photo/2016/03/30/21/59/coffee-beans-1291656_1280.jpg" alt="" />
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minima illo dolor natus, ipsa voluptates suscipit blanditiis exercitationem excepturi distinctio possimus quasi asperiores facere architecto officia recusandae atque fuga. Aperiam.</p>
          </div>
          <div className={classes.textbox}>
            <img src="https://cdn.pixabay.com/photo/2016/03/30/21/59/coffee-beans-1291656_1280.jpg" alt="" />
            <h1>Title</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio minima illo dolor natus, ipsa voluptates suscipit blanditiis exercitationem excepturi distinctio possimus quasi asperiores facere architecto officia recusandae atque fuga. Aperiam.</p>
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