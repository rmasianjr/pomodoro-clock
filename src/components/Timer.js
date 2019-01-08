import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ timerType, timer }) => {
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;
  const timeLeft = `${minutes < 10 ? '0' : ''}${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <div className="timer-box">
      <div id="timer-label">{timerType}</div>
      <div id="time-left">{timeLeft}</div>
    </div>
  );
};

Timer.propTypes = {
  timerType: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired
};

export default Timer;
