// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import classes from './style.module.css';

const Navbar = () => {
  return (
    <header className={classes.navbar}>
      <div className={classes.headerContent}>
        <div className={classes.navbarTitle}>
          <h1 id='plan'>MyPlanner</h1>
        </div>
        <div className={classes.authMenu}>
          {/* Auth Menu */}
          <div className={classes.auth}>
            <NavLink to="/login" className={classes.login}>
              Login
            </NavLink>
            <NavLink to="/register" className={classes.register}>
              Sign up
            </NavLink>
          </div>
          <div className={classes.menuBtn}>
            <MenuIcon size={30} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
