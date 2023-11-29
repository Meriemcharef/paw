// ReactCalendar.js
import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from '../components/style.module.css';

const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };
  const onViewChange = ({ view }) => {
    console.log(`View changed to ${view}`);
  };

  return (
    <div className={`calendar-container ${styles.calendarContainer}`}>
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};

export default ReactCalendar;
