import React from 'react';
import './Arc.css';
import PropTypes from 'prop-types';

const Arc = ({ isRunning }) => (
  <div className={`arc arc-1 ${!isRunning && 'pause-anim'}`}>
    <div className={`arc arc-2 ${!isRunning && 'pause-anim'}`}>
      <div className={`arc arc-3 ${!isRunning && 'pause-anim'}`}>
        <div className={`arc arc-4 ${!isRunning && 'pause-anim'}`} />
      </div>
    </div>
  </div>
);

Arc.propTypes = {
  isRunning: PropTypes.bool.isRequired
};

export default Arc;
