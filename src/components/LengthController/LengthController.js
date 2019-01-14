import React from 'react';
import PropTypes from 'prop-types';
import './LengthController.css';

const LengthController = ({ type, length, onUpdateLength, isRunning }) => (
  <div className="length-ctrl">
    <div id={`${type}-label`} className="length-label">{`${type} Length`}</div>
    <div className="length-buttons">
      <button
        className="length-btn-inc"
        id={`${type}-increment`}
        onClick={() => onUpdateLength(type, 'inc')}
        disabled={length >= 60 || isRunning ? true : false}
      >
        <i className="icon ion-md-arrow-dropup" />
      </button>
      <div id={`${type}-length`} className="length">
        {length}
      </div>
      <button
        className="length-btn-dec"
        id={`${type}-decrement`}
        onClick={() => onUpdateLength(type, 'dec')}
        disabled={length <= 1 || isRunning ? true : false}
      >
        <i className="icon ion-md-arrow-dropdown" />
      </button>
    </div>
  </div>
);

LengthController.propTypes = {
  type: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onUpdateLength: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired
};

export default LengthController;
