import React, { Component } from 'react';
import './App.css';
import LengthController from './components/LengthController';
import Timer from './components/Timer';
import TimerController from './components/TimerController';

class App extends Component {
  state = {
    sessionTime: 25,
    breakTime: 5,
    timer: 1500,
    timerType: 'session',
    isRunning: false
  };

  handleUpdateLength = (type, action) => {
    const timeType = type === 'session' ? 'sessionTime' : 'breakTime';
    const { isRunning } = this.state;

    if (isRunning) return;

    if (action === 'inc') {
      this.setState(prevState => ({
        [timeType]: prevState[timeType] + 1
      }));
    } else if (action === 'dec') {
      this.setState(prevState => ({
        [timeType]: prevState[timeType] - 1
      }));
    }

    if (type === 'session') {
      this.handleUpdateTimer();
    }
  };

  handleUpdateTimer() {
    this.setState(prevState => ({
      timer: prevState.sessionTime * 60
    }));
  }

  handleCountDown = () => {
    const { isRunning } = this.state;

    if (!isRunning) {
      this.setState(prevState => ({
        isRunning: !prevState.isRunning
      }));
      this.startCountDown();
    } else {
      this.setState(prevState => ({
        isRunning: !prevState.isRunning
      }));
      clearInterval(this.countDown);
    }
  };

  changeTimer() {
    this.setState(({ timerType, breakTime, sessionTime }) => {
      if (timerType === 'session') {
        return { timer: breakTime * 60, timerType: 'break' };
      } else {
        return { timer: sessionTime * 60, timerType: 'session' };
      }
    });

    clearInterval(this.countDown);
    this.startCountDown();
  }

  timeCheck() {
    const { timer } = this.state;
    if (timer < 0) {
      this.changeTimer();
    }
  }

  startCountDown() {
    this.countDown = setInterval(() => {
      this.setState(prevState => ({
        timer: prevState.timer - 1
      }));
      this.timeCheck();
    }, 1000);
  }

  handleReset = () => {
    clearInterval(this.countDown);
    this.setState(() => ({
      sessionTime: 25,
      breakTime: 5,
      timer: 1500,
      timerType: 'session',
      isRunning: false
    }));
  };

  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  render() {
    const { sessionTime, breakTime, timer, timerType, isRunning } = this.state;

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
        <Timer timerType={timerType} timer={timer} />
        <TimerController
          onCountDown={this.handleCountDown}
          isRunning={isRunning}
          onResetTimer={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
