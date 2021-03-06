import React, { Component } from 'react';
import Timer from '../components/Timer';

export default class TimerContainer extends Component {
  constructor() {
    super();
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.handleResetTimer = this.handleResetTimer.bind(this);
    this.handleRestartPomodoro = this.handleRestartPomodoro.bind(this);
    this.handleStartSmallBreak = this.handleStartSmallBreak.bind(this);
    this.handleStartLongBreak = this.handleStartLongBreak.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.setMinutesSeconds = this.setMinutesSeconds.bind(this);
    this.state = {
      minutes: 24,
      seconds: 60,
      intervalID: 0,
    };
  }

  setMinutesSeconds(minutes, seconds) {
    this.setState({
      minutes,
      seconds,
    });
  }

  decrementTimer() {
    if (this.state.minutes === 0 && this.state.seconds === 0) {
      clearInterval(this.state.intervalID);
      this.setMinutesSeconds(this.state.minutes, this.state.seconds);
    } else if (this.state.seconds === 0) {
      this.setMinutesSeconds(this.state.minutes - 1, 59);
    } else {
      this.setMinutesSeconds(this.state.minutes, this.state.seconds - 1);
    }
  }

  handleStartTimer() {
    clearInterval(this.state.intervalID);
    const intervalID = setInterval(this.decrementTimer, 1000);
    this.setState({
      intervalID,
    });
  }

  handleStopTimer() {
    clearInterval(this.state.intervalID);
  }

  handleResetTimer() {
    clearInterval(this.state.intervalID);
    this.setMinutesSeconds(24, 60);
  }

  handleRestartPomodoro() {
    clearInterval(this.state.intervalID);
    this.setMinutesSeconds(24, 60);
    const intervalID = setInterval(this.decrementTimer, 1000);
    this.setState({
      intervalID,
    });
  }

  handleStartSmallBreak() {
    clearInterval(this.state.intervalID);
    this.setMinutesSeconds(4, 60);
    const intervalID = setInterval(this.decrementTimer, 1000);
    this.setState({
      intervalID,
    });
  }

  handleStartLongBreak() {
    clearInterval(this.state.intervalID);
    this.setMinutesSeconds(9, 60);
    const intervalID = setInterval(this.decrementTimer, 1000);
    this.setState({
      intervalID,
    });
  }

  render() {
    return (
      <Timer
        onStartTimer={this.handleStartTimer}
        onStopTimer={this.handleStopTimer}
        onResetTimer={this.handleResetTimer}
        onRestartPomodoro={this.handleRestartPomodoro}
        onStartSmallBreak={this.handleStartSmallBreak}
        onStartLongBreak={this.handleStartLongBreak}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
      />
    );
  }
}
