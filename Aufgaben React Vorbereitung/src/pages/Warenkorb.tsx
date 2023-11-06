import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../warenkorb.module.css';
import classes from '../Root.module.css';
import warenkorbImage from '../warenkorb.png';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}
const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      const parsedCartItems = JSON.parse(cartData) as Product[];
      setCartItems(parsedCartItems);
    }
  }, []);


  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
 
  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      if (typeof item.price === 'number') {
        return total + item.price;
      }
      return total;
    }, 0);
  
    const formattedTotalPrice = totalPrice.toFixed(2);
    console.log('Total Price:', formattedTotalPrice); // Debug-Ausgabe
    return formattedTotalPrice;
  };

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

        <section className={classes.textbox_start}>
          <h1>Shopping Cart</h1>
        </section>

        <section className={classes.Checkout_container}>
          {cartItems.length === 0 ? (
            <p>Your shopping cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>Price: {item.price}</p>
                      <br />
                      <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className={classes.Checkout_Button}>
          <div>
          <p>Total: {getTotalPrice()}</p>

            <Link to="/checkout">
              <button>Checkout</button>
            </Link>
          </div>
        </section>


      </main>
    </div>
  );
};

export default Cart;
