// Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenuOutline as MenuIcon } from 'react-icons/io5';
import WindowIcon from '@mui/icons-material/Window';
import TaskIcon from '@mui/icons-material/Task';
import ReportIcon from '@mui/icons-material/Report';
import AllOutIcon from '@mui/icons-material/AllOut';
import GradingIcon from '@mui/icons-material/Grading';
import classes from './style.module.css';

const Sidebar = () => {
  const [clickedLink, setClickedLink] = useState(null);

  const handleLinkClick = (link) => {
    setClickedLink(link);
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarList}>
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
            to="/task"
            className={`row ${clickedLink === '/task' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/task')}
          >
            <div id="icon" className={classes.icon}>
              <TaskIcon />
            </div>
            <div id="title" className={classes.title}>Task</div>
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
            to="/all"
            className={`row ${clickedLink === '/all' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/all')}
          >
            <div id="icon" className={classes.icon}>
              <AllOutIcon />
            </div>
            <div id="title" className={classes.title}>All</div>
          </NavLink>

          <NavLink
            to="/completed"
            className={`row ${clickedLink === '/completed' ? `${classes.active} ${classes.clicked}` : ''} ${classes.rowContainer}`}
            onClick={() => handleLinkClick('/completed')}
          >
            <div id="icon" className={classes.icon}>
              <GradingIcon />
            </div>
            <div id="title" className={classes.title}>Completed</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
