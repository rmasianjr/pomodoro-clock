import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css';
import Arc from '../Arc/Arc';

const Timer = ({ timerType, timer, isRunning }) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const timeLeft = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  const warnStyle = {
    shadow1: {
      boxShadow: '0 0 5rem rgba(255, 0, 0, 0.7)'
    },
    shadow2: {
      boxShadow: '0 0 4rem 2rem rgba(255, 0, 0, 0.7), inset 0 0 3px 8px rgba(255, 0, 0, 0.7)'
    },
    color: {
      color: 'red'
    }
  };
  
  return (
    <div className="timer-container">
      <div id="timer-label" className="timer-label">
        <i className="icon ion-ios-timer" /> {timerType}
      </div>
      <div className="timer-box" style={timer < 60 ? warnStyle.shadow1 : {}}>
        <Arc isRunning={isRunning}/>
        <div className="timer" style={timer < 60 ? warnStyle.shadow2 : {}}>
          <div
            id="time-left"
            className="time-left-label"
            style={timer < 60 ? warnStyle.color : {}}
          >
            {timeLeft}
          </div>
        </div>
      </div>
    </div>
  );
};

Timer.propTypes = {
  timerType: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired
};

export default Timer;
