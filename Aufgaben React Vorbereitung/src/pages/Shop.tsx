import React, { useState } from 'react';
import styles from '../Shop.module.css';
import productImage from '../Coffee1.jpg';
import productImage1 from '../Caffee2.jpg'
import productImage2 from '../Coffee3.png'
import classes from "../Root.module.css"
import "../Root.module.css"
import { Link } from 'react-router-dom';

const Shop = () => {

  const products = [
    { id: '1', name: 'Lavazza-Coffee', price: '€12.85', image: productImage, origin: 'Italy', strength: 'Strong' },
    { id: '2', name: 'Torro-Espresso', price: '€10.95', image: productImage1, origin: 'Spain', strength: 'Medium' },
    { id: '3', name: 'Mövenpick-Coffee', price: '€9.99', image: productImage2, origin: 'Germany', strength: 'Light' },
    { id: '1', name: 'Segafredo', price: '€12.85', image: productImage, origin: 'Italy', strength: 'Strong' },
    { id: '2', name: 'Saimaze', price: '€10.95', image: productImage1, origin: 'Spain', strength: 'Medium' },
    { id: '3', name: 'Dallmayr', price: '€9.99', image: productImage2, origin: 'Germany', strength: 'Light' }
  ];

  const [filter, setFilter] = useState({ origin: '', strength: '' });
  const filteredProducts = products.filter(product =>
    (filter.origin === '' || product.origin === filter.origin) &&
    (filter.strength === '' || product.strength === filter.strength)
  );

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
      </header>

      <main>

        <section>

          <div className={styles.filter}>
            <select onChange={(e) => setFilter({ ...filter, origin: e.target.value })}>
              <option value="">All origins</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Germany">Germany</option>
            </select>
            <select onChange={(e) => setFilter({ ...filter, strength: e.target.value })}>
              <option value="">All strengths</option>
              <option value="Strong">Strong</option>
              <option value="Medium">Medium</option>
              <option value="Light">Light</option>
            </select>
          </div>
          <input type="text" placeholder="Search.." />

        </section>

        <section>
          <div className={styles.container}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={styles.product}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
};
export default Shop;
