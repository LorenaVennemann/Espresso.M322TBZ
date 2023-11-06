import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../warenkorb.module.css';
import classes from "../Root.module.css";
import "../Root.module.css";
import warenkorbImage from '../warenkorb.png';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const Checkout: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      if (typeof item.price === 'number') {
        return total + item.price;
      }
      return total;
    }, 0);
    return totalPrice.toFixed(2);
  };

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
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
        <section className={classes.textbox_start}>
          <h1>Checkout</h1>
        </section>

        <section className={classes.checkout_final}>
          <div className="checkout-steps">
            <div className="checkout-step">
              <h3>Step 1: Review Your Cart</h3>
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    {item.name} - €{item.price.toFixed(2).toString()}
                  </li>
                ))}
              </ul>
            </div>

            <div className="checkout-step">
              <h3>Step 2: Enter Delivery Address</h3>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>

            <div className="checkout-step">
              <h3>Step 3: Select Payment Method</h3>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="paypal">PayPal</option>
              </select>
            </div>

            {paymentMethod === 'creditCard' && (
              <div className="checkout-step">
                <h3>Step 4: Enter Credit Card Information</h3>
                <input
                  type="text"
                  placeholder="Enter your credit card number"
                  value={creditCardNumber}
                  onChange={(e) => setCreditCardNumber(e.target.value)}
                  required
                />
              </div>
            )}

            <div className="checkout-step">
              <h3>Step 5: Review and Pay</h3>
              <p>Total: {getTotalPrice()}</p>
              {paymentSuccess ? (
                <p>Payment successful. Thank you for your order!</p>
              ) : (
                <button onClick={handlePayment}>Pay</button>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
    };
export default Checkout;
