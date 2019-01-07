import React from 'react';
import PropTypes from 'prop-types';

const LengthController = ({ type, length, onUpdateLength }) => (
  <div className="length-ctrl">
    <div id={`${type}-label`}>{`${type} Length`}</div>
    <div className="length-buttons">
      <button
        id={`${type}-increment`}
        onClick={() => onUpdateLength(type, 'inc')}
        disabled={length >= 60 ? true : false}
      >
        +
      </button>
      <div id={`${type}-length`}>{length}</div>
      <button
        id={`${type}-decrement`}
        onClick={() => onUpdateLength(type, 'dec')}
        disabled={length <= 1 ? true : false}
      >
        -
      </button>
    </div>
  </div>
);

LengthController.propTypes = {
  type: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onUpdateLength: PropTypes.func.isRequired
};

export default LengthController;
