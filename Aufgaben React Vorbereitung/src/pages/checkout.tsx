import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../warenkorb.module.css';
import classes from '../Root.module.css';
import warenkorbImage from '../warenkorb.png';

// Definieren des Produktinterfaces
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

const Checkout: React.FC = () => {
  // Zustände für den Warenkorb, Adresse und Zahlungsmethode
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Verwenden von useEffect, um den Warenkorb aus dem lokalen Speicher abzurufen
  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCartItems(JSON.parse(cartData));
    }
  }, []);

  // Funktion zur Berechnung des Gesamtpreises im Warenkorb
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  // Funktion zur Abwicklung der Zahlung (Platzhalter)
  const handlePayment = () => {
    // Fügen Sie hier Ihre Logik für die Zahlungsabwicklung ein
    alert('Zahlung erfolgreich');
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
        <h2>Checkout</h2>
<main>
        <div className={styles.stepContainer}>
          <div className={styles.step}>
            <h3>Schritt 1: Warenkorb überprüfen</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  {item.name} - €{item.price}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.step}>
            <h3>Schritt 2: Lieferadresse eingeben</h3>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
          </div>

          <div className={styles.step}>
            <h3>Schritt 3: Zahlungsmethode auswählen</h3>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} required>
              <option value="">Wählen Sie eine Zahlungsmethode</option>
              <option value="creditCard">Kreditkarte</option>
              <option value="debitCard">Debitkarte</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <div className={styles.step}>
            <h3>Schritt 4: Überprüfen und bezahlen</h3>
            <p>Gesamt: €{getTotalPrice().toFixed(2)}</p>
            <button onClick={handlePayment}>Bezahlen</button>
          </div>
        </div>
        </main>
    </div>
  );
};

export default Checkout;
