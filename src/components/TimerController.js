import React from 'react';
import PropTypes from 'prop-types';

const TimerController = ({ onCountDown, isRunning, onResetTimer }) => (
  <div>
    <button id="start_stop" onClick={() => onCountDown()}>
      {isRunning ? 'Pause' : 'Play'}
    </button>
    <button id="reset" onClick={() => onResetTimer()}>
      Reset
    </button>
  </div>
);

TimerController.propTypes = {
  onCountDown: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onResetTimer: PropTypes.func.isRequired
};

export default TimerController;
