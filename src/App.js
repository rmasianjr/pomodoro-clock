import React, { Component } from 'react';
import './App.css';
import LengthController from './components/LengthController';
import Timer from './components/Timer';
import TimerController from './components/TimerController';

class App extends Component {
  state = {
    sessionTime: 25,
    breakTime: 5
  };

  handleUpdateLength = (type, action) => {
    const timeType = type === 'session' ? 'sessionTime' : 'breakTime';

    if (action === 'inc') {
      this.setState(prevState => ({
        [timeType]: prevState[timeType] + 1
      }));
    } else if (action === 'dec') {
      this.setState(prevState => ({
        [timeType]: prevState[timeType] - 1
      }));
    }
  };

  render() {
    const { sessionTime, breakTime } = this.state;

    return (
      <div className="App">
        <div>Pomodoro Clock</div>
        <LengthController
          type="session"
          length={sessionTime}
          onUpdateLength={this.handleUpdateLength}
        />
        <LengthController
          type="break"
          length={breakTime}
          onUpdateLength={this.handleUpdateLength}
        />
        <Timer timerType="Session" />
        <TimerController />
      </div>
    );
  }
}

export default App;
