// ImportantPage.js
import React from 'react';
import TaskList from '../components/TaskList';
import styles from '../components/style.module.css';


const Important = () => {
  return (
    <div className={styles.important}>
      <h2>Important!!</h2>
      <div className={styles.taskListContainer}>
      <TaskList showCalendar={true} />
      </div>
    </div>
  );
};

export default Important;

