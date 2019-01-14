import React from 'react';
import PropTypes from 'prop-types';
import './Timer.css';
import Arc from '../Arc/Arc';

const Timer = ({ timerType, timer }) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const timeLeft = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="timer-container">
      <div id="timer-label" className="timer-label">
        <i class="icon ion-ios-timer" /> {timerType}
      </div>
      <div className="timer-box">
        <Arc />
        <div className="timer">
          <div id="time-left" className="time-left-label">
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
