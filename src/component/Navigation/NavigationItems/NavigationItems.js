import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>BurgerBuilder</NavigationItem>
            <NavigationItem link="/">CheckOut</NavigationItem>
        </ul>
    );
}

export default navigationItems;