import React from 'react';
import burgerLogo from '../../assets/images/127 burger-logo.png';
import classes from './Logo.module.css';

const logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="MY Burger" />
        </div>
    );
};

export default logo;