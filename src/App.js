import React, { Component } from 'react';
import './App.css';
import LengthController from './components/LengthController/LengthController';
import Timer from './components/Timer/Timer';
import TimerController from './components/TimerController/TimerController';

class App extends Component {
  state = {
    sessionTime: 25,
    breakTime: 5,
    timer: 1500,
    timerType: 'session',
    isRunning: false
  };

  audioRef = React.createRef();

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
      this.audioRef.current.play();
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
    this.audioRef.current.currentTime = 0;
    this.audioRef.current.pause();
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
        <h1 className="app-title">Pomodoro Clock</h1>
        <div className="length-ctrl-box">
          <LengthController
            type="session"
            length={sessionTime}
            onUpdateLength={this.handleUpdateLength}
            isRunning={isRunning}
          />
          <LengthController
            type="break"
            length={breakTime}
            onUpdateLength={this.handleUpdateLength}
            isRunning={isRunning}
          />
        </div>
        <div className="time">
          <Timer timerType={timerType} timer={timer} isRunning={isRunning} />
          <TimerController
            onCountDown={this.handleCountDown}
            isRunning={isRunning}
            onResetTimer={this.handleReset}
          />
        </div>
        <audio
          id="beep"
          src="https://res.cloudinary.com/dpc8imgk1/video/upload/v1547455581/alarm.mp3"
          type="audio/mpeg"
          preload="auto"
          ref={this.audioRef}
        />
        <footer className="footer">
          <p>
            Created by:{' '}
            <a
              className="footer-link"
              href="https://twitter.com/rmasianjr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ricardo Masian Jr.
            </a>{' '}
            |{' '}
            <a
              className="footer-link"
              href="https://github.com/rmasianjr/pomodoro-clock"
              target="_blank"
              rel="noopener noreferrer"
            >
              View source code
            </a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
