import React, { Component } from 'react';
import './App.css';
import LengthController from './components/LengthController';
import Timer from './components/Timer';
import TimerController from './components/TimerController';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>Pomodoro Clock</div>
        <LengthController type="session" length={25} />
        <LengthController type="break" length={5} />
        <Timer timerType="Session" />
        <TimerController />
      </div>
    );
  }
}

export default App;
