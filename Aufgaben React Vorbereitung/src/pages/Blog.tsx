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
          <h1>Welcome to our Blog!</h1>
        </section>

        <section className={classes.blog_double}>
          <div className={classes.left}>
            <div className={classes.blog_card}>
              <img src="https://cdn.pixabay.com/photo/2015/02/24/11/54/vienna-647328_1280.jpg" alt="" />
              <div className={classes.text_box}>
                <h1>"Brewing Journeys: A Caffeinated Chronicle"</h1>
                <p>"Brewing Journeys: A Caffeinated Chronicle" is a captivating coffee blog that takes readers on a delightful exploration of the world of coffee. From the origins of different coffee beans to the art of brewing the perfect cup, this blog serves up a rich blend of coffee-related knowledge and inspiration.</p>
              </div>
            </div>
            <div className={classes.blog_double}>
              <div className={classes.blog_card}>
                <img src="https://cdn.pixabay.com/photo/2015/06/24/01/15/coffee-819362_1280.jpg" alt="" />
                <div className={classes.text_box}>
                  <h1>"Bean Buzz: Savoring the Aromas, Stories, and Craft of Coffee"</h1>
                  <p>"Bean Buzz" is a captivating coffee blog that takes you on a sensory journey through the world of coffee. Immerse yourself in the rich aromas, indulge in the captivating stories, and appreciate the meticulous craft that goes into every cup.</p>
                </div>
              </div>
              <div className={classes.blog_card}>
                <img src="https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg" alt="" />
                <div className={classes.text_box}>
                  <h1>"Coffee Chronicles: Tales from the Percolating World"</h1>
                  <p>Uncover the hidden gems of coffee history as we delve into the origins and evolution of this beloved beverage. From ancient legends to modern-day innovations, we'll unravel the fascinating tales of discovery, trade, and cultural significance that have shaped coffee's journey throughout the ages.</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.blog_card}>
              <img src="https://cdn.pixabay.com/photo/2017/05/12/08/29/coffee-2306471_1280.jpg" alt="" />
              <div className={classes.text_box}>
                <h1>"Cup & Canvas: Blending Coffee and Creativity"</h1>
                <p>"Cup & Canvas: Blending Coffee and Creativity" is an inspiring coffee blog that brings together two art forms – the exquisite world of coffee and the boundless realm of creativity. Step into a world where the aromatic brew fuels imagination, and each sip stirs the depths of your artistic spirit.</p>
              </div>
            </div>
            <div className={classes.blog_card}>
              <img src="https://cdn.pixabay.com/photo/2019/01/24/18/03/coffee-3953022_1280.jpg" alt="" />
              <div className={classes.text_box}>
                <h1>"Roast & Revel: Exploring the Bold Flavors of Coffee Culture"</h1>
                <p>Indulge in the art of coffee roasting as we uncover the secrets behind achieving the perfect roast. Learn about the different roast profiles, from light and delicate to dark and robust, and discover how each roast level brings out distinct flavors and characteristics in the beans. Gain insights from expert roasters, explore roasting techniques, and even learn how to roast your own coffee at home.</p>
              </div>
            </div>
          </div>

        </section>


        <footer className={classes.footer}>
          <h1>Expresso Oase © 2023 ExpressoOase.com</h1>
        </footer>

      </main>

    </div>
  );
};

export default Blog;
