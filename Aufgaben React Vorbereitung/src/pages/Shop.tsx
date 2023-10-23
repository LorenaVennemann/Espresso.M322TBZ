import React, { useState } from 'react';
import styles from '../Shop.module.css';
import productImage from '../Coffee1.jpg';

const Shop = () => {
    const [filter, setFilter] = useState({ origin: '', strength: '' });

    const products = [
        { id: '1', name: 'Product 1', price: '€3.85', image: productImage, origin: 'Italy', strength: 'Strong' },
    ];

    const filteredProducts = products.filter(product => 
        (filter.origin === '' || product.origin === filter.origin) &&
        (filter.strength === '' || product.strength === filter.strength)
    );

    return (
        <div>
            <div className={styles.navbar}>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
                <a href="#blog">Blog</a>
                <a href="#contact">Contact</a>
                <a href="#shop">Shop</a>
            </div>
            <div className={styles.filter}>
                <select onChange={(e) => setFilter({ ...filter, origin: e.target.value })}>
                    <option value="">All origins</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                </select>
                <select onChange={(e) => setFilter({ ...filter, strength: e.target.value })}>
                    <option value="">All strengths</option>
                    <option value="Strong">Strong</option>
                    <option value="Medium">Medium</option>
                    <option value="Light">Light</option>
                </select>
            </div>
            <input type="text" placeholder="Search.." />
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
        </div>
    );
};
export default Shop;
