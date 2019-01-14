import React from 'react';
import PropTypes from 'prop-types';
import './TimerController.css';

const TimerController = ({ onCountDown, isRunning, onResetTimer }) => (
  <div className="timer-controller">
    <div className="btn-box btn-box-playstop">
      <span className="curve-line" />
      <button id="start_stop" onClick={() => onCountDown()}>
        {isRunning ? (
          <i className="icon ion-md-pause" />
        ) : (
          <i className="icon ion-md-play" />
        )}
      </button>
      <span className="short-line" />
    </div>
    <div className="btn-box">
      <span />
      <button id="reset" onClick={() => onResetTimer()}>
        <i className="icon ion-md-sync" />
      </button>
      <span className="short-line" />
    </div>
  </div>
);

TimerController.propTypes = {
  onCountDown: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  onResetTimer: PropTypes.func.isRequired
};

export default TimerController;
