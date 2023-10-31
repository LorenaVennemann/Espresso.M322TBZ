import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../warenkorb.module.css';
import classes from "../Root.module.css";
import "../Root.module.css";
import warenkorbImage from '../warenkorb.png';
interface Product {
  id: string;
  name: string;
  price: string;
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
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  const handlePayment = () => {
    // Hier würde Ihre tatsächliche Zahlungsverarbeitungslogik eingefügt werden, indem Sie ein Zahlungs-Gateway integrieren.

    // Simulieren einer erfolgreichen Zahlung (ersetzen Sie dies durch echte Zahlungslogik)
    setTimeout(() => {
      // Hier könnten Sie eine API-Anfrage an Ihr Zahlungs-Gateway senden
      // und auf die Antwort warten, um den Zahlungsstatus zu überprüfen.

      // Wenn die Zahlung erfolgreich ist, führen Sie die folgenden Schritte aus:

      // 1. Speichern der Bestellinformationen und Zahlungsdetails in Ihrer Datenbank
      // 2. Versenden einer Bestätigungs-E-Mail an den Kunden
      // 3. Weiterleitung zur Bestellbestätigungsseite oder Dankesseite

      setPaymentSuccess(true);
    }, 2000); // Hier simulieren wir eine Verzögerung von 2 Sekunden, um die Zahlungsverarbeitung zu zeigen.
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
        <h2>Checkout</h2>

        <div className="checkout-steps">
          <div className="checkout-step">
            <h3>Step 1: Review Your Cart</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - €{item.price}
                </li>
              ))}
            </ul>
          </div>

          <div className="checkout-step">
            <h3>Step 2: Enter Delivery Address</h3>
            <input type="text" placeholder="Enter your address" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>

          <div className="checkout-step">
            <h3>Step 3: Select Payment Method</h3>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
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
            <p>Total: €{getTotalPrice().toFixed(2)}</p>
            {paymentSuccess ? (
              <p>Payment successful. Thank you for your order!</p>
            ) : (
              <button onClick={handlePayment}>Pay</button>
            )}
            
            </div></div>
      </main>
    </div>
  );
};
export default Checkout;


