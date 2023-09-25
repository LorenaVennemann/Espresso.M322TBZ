import React from 'react';
import logo from "../Logo.jpg";
import classes from "../AboutUs.module.css";

const AboutUs = () => {
    return (
        <>
            <div className={classes.upperHalf}>
                <h1 className={classes.h1}>About Us</h1>
                <img className={classes.img} src={logo} alt="Espresso Oasis Logo" />
                <p className={classes.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className={classes.lowerHalf}>
            </div>
        </>
    );
};

export default AboutUs;

