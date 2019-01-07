import React from 'react';
import PropTypes from 'prop-types';

const Timer = ({ timerType }) => (
  <div className="timer-box">
    <div id="timer-label">{timerType}</div>
    <div id="time-left">25:00</div>
  </div>
);

Timer.propTypes = {
  timerType: PropTypes.string.isRequired
};

export default Timer;
