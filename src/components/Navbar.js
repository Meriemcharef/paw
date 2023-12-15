// Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import { FaRegMoon as MoonIcon, FaRegSun as SunIcon } from 'react-icons/fa';
import classes from './navbar.module.css';
import { useTheme } from '../theme/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const renderDropdownMenu = () => {
    return (
      <div className={classes.dropdownMenu}>
        <div className={classes.dropdownItem} onClick={toggleDarkMode}>
          {isDarkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </div>
      </div>
    );
  };

  return (
    <header className={`${classes.navbar} ${isDarkMode ? classes.darkMode : ''}`}>
      <div className={classes.headerContent}>
        <div className={classes.navbarTitle}>
          <h1 id="plan">MyPlanner</h1>
        </div>
        <div className={classes.authMenu}>
          <div className={classes.auth}>
            <NavLink to="/login" className={`${classes.login} ${classes.authButton}`}>
              Login
            </NavLink>
            <NavLink to="/signup" className={`${classes.register} ${classes.authButton}`}>
              Sign up
            </NavLink>
          </div>
          <div className={classes.menuBtn} onClick={toggleMenu}>
            <MenuIcon size={30} />
          </div>
          {isMenuOpen && renderDropdownMenu()}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
