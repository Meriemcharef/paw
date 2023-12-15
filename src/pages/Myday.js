import React, { useState, useEffect } from 'react';
// import Todowrapper from '../components/todowrapper';
import Clock from '../components/Clock';
import styles from './myday.module.css';
import  TacheList from '../components/Tachelist';

function Myday() {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');
  const [timerRunning, setTimerRunning] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  const handleStartTimer = () => {
    setStartTime(Date.now() - elapsedTime);
    setTimerRunning(true);
  };

  const handlePauseTimer = () => {
    setTimerRunning(false);
    setElapsedTime(Date.now() - startTime);
  };

  const handleRestartTimer = () => {
    setStartTime(Date.now());
    setElapsedTime(0);
    setTimerRunning(true);
  };

  const handleStopTimer = () => {
    setTimerRunning(false);
    setElapsedTime(0);
    setTimerDays('00');
    setTimerHours('00');
    setTimerMinutes('00');
    setTimerSeconds('00');
  };

  useEffect(() => {
    let interval;

    const startTimer = () => {
      interval = setInterval(() => {
        setElapsedTime(Date.now() - startTime);

        const days = Math.floor(elapsedTime / (24 * 60 * 60 * 1000));
        const hours = Math.floor((elapsedTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((elapsedTime % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((elapsedTime % (60 * 1000)) / 1000);

        setTimerDays(formatNumber(days));
        setTimerHours(formatNumber(hours));
        setTimerMinutes(formatNumber(minutes));
        setTimerSeconds(formatNumber(seconds));
      }, 1000);
    };

    if (timerRunning) {
      startTimer();
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerRunning, elapsedTime, startTime]);

  const formatNumber = (number) => {
    return number < 10 ? `0${number}` : number.toString();
  };

 
return (
  <div className={styles.myDayContainer}>
    <Clock
      timerDays={timerDays}
      timerHours={timerHours}
      timerMinutes={timerMinutes}
      timerSeconds={timerSeconds}
      onStart={handleStartTimer}
      onPause={handlePauseTimer}
      onRestart={handleRestartTimer}
      onStop={handleStopTimer}
      showRestartButton={!timerRunning && elapsedTime > 0}
    />
    <div className={styles.timerButtons}>
      <button onClick={handleStartTimer} disabled={timerRunning}>Start</button>
      <button onClick={handlePauseTimer} disabled={!timerRunning}>Pause</button>
      <button onClick={handleStopTimer} disabled={!timerRunning}>Arrêter</button>
      <button onClick={handleRestartTimer} disabled={timerRunning || elapsedTime === 0}>Redémarrer</button>
    </div>
    {/* <Todowrapper /> */}
    <TacheList/>
  </div>
);
}

export default Myday;
