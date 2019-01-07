import React from 'react';
import PropTypes from 'prop-types';

const LengthController = ({ type, length }) => (
  <div className="length-ctrl">
    <div id={`${type}-label`}>{`${type} Length`}</div>
    <div className="length-buttons">
      <button id={`${type}-increment`}> + </button>
      <div id={`${type}-length`}>{length}</div>
      <button id={`${type}-decrement`}>-</button>
    </div>
  </div>
);

LengthController.propTypes = {
  type: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
};

export default LengthController;
