// Sidebar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import WindowIcon from '@mui/icons-material/Window';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Report';
import AllOutIcon from '@mui/icons-material/AllOut';
import GradingIcon from '@mui/icons-material/Grading';
import classes from './sidebar.module.css';
import { useTheme } from '../theme/ThemeContext';

const Sidebar = () => {
  const [clickedLink, setClickedLink] = useState(null);
  const { isDarkMode } = useTheme();

  const handleLinkClick = (link) => {
    setClickedLink(link);
    console.log(isDarkMode);
  };

  return (
    <div className={`${classes.sidebar} ${isDarkMode ? classes.darkMode : ''}`}>
        <div className={classes.links}>
          <NavLink
            to="/myday"
            className={`row ${clickedLink === '/myday' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/myday')}
          >
            <div id="icon" className={classes.icon}>
              <WindowIcon />
            </div>
            <div id="title" className={classes.title}>Myday</div>
          </NavLink>

          <NavLink
            to="/myweek"
            className={`row ${clickedLink === '/myweek' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/myweek')}
          >
            <div id="icon" className={classes.icon}>
              <TaskIcon />
            </div>
            <div id="title" className={classes.title}>Myweek</div>
          </NavLink>

          <NavLink
            to="/important"
            className={`row ${clickedLink === '/important' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/important')}
          >
            <div id="icon" className={classes.icon}>
              <ReportIcon />
            </div>
            <div id="title" className={classes.title}>Important</div>
          </NavLink>
           <NavLink
            to="/Counter"
            className={`row ${clickedLink === '/Counter' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/Counter')}
          >
            <div id="icon" className={classes.icon}>
              <GradingIcon />
            </div>
            <div id="title" className={classes.title}>Counter</div>
          </NavLink>
        <NavLink
          to="/religion"
          className={`row ${clickedLink === '/religion' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
          onClick={() => handleLinkClick('/religion')}
                  >
          <div id="icon" className={classes.icon}>
          <GradingIcon />
          </div>
            <div id="title" className={classes.title}>Religion</div>
          </NavLink>
          <NavLink
            to="/mesAchats"
            className={`row ${clickedLink === '/mesAchats' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/mesAchats')}
          >
            <div id="icon" className={classes.icon}>
              <AllOutIcon />
            </div>
            <div id="title" className={classes.title}>My Buys</div>
          </NavLink>
        </div>
    </div>
  );
};

export default Sidebar;
