import React, { Fragment } from 'react';
import './clock.module.css';

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds, onStart, onPause, onRestart, onStop, showButtons, timerRunning }) => {
  return (
    <Fragment>
      <section className="timer-Container">
        <section className="timer">
          <div className="clock">
            <section>
              <p>{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <small>Hours</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <small>Minutes</small>
            </section>{" "}
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <small>Seconds</small>
            </section>{" "}
          </div>
        </section>
      </section>
      
      {showButtons && (
        <div className="timerButtons">
          <button onClick={onStart} disabled={timerRunning}>Start</button>
          <button onClick={onPause} disabled={!timerRunning}>Pause</button>
          <button onClick={onStop} disabled={!timerRunning}>Arrêter</button>
          <button onClick={onRestart} disabled={timerRunning || elapsedTime === 0}>Redémarrer</button>
        </div>
      )}
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: '10',
  timerHours: '10',
  timerMinutes: '10',
  timerSeconds: '10',
};

export default Clock;