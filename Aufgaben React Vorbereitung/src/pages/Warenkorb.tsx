import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../warenkorb.module.css';
import classes from "../Root.module.css";
import "../Root.module.css";
import warenkorbImage from "../warenkorb.png"
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className={styles.cart}>
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
            <li>
  <Link to="/warenkorb">
    <img src={warenkorbImage} alt="Warenkorb" />
  </Link>
</li>
          </ul>
        </nav>
      </header>

      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p>Total: €{getTotalPrice().toFixed(2)}</p>
    </div>
  );
};

export default Cart;
