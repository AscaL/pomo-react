import React, { Component } from 'react';
import Timer from '../components/Timer';

export default class TimerContainer extends Component {
  constructor() {
    super();
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.handleResetTimer = this.handleResetTimer.bind(this);
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

  componentWillUnmount() {
    console.log('comp will unmount');
    clearInterval(this.state.intervalID);
  }

  setMinutesSeconds(minutes, seconds) {
    this.setState({
      minutes,
      seconds,
    });
  }

  decrementTimer() {
    console.log('state minutes:', this.state.minutes);
    console.log('state seconds:', this.state.seconds);

    this.setState({
      seconds: this.state.seconds - 1,
    });
  }

  handleStartTimer(e) {
    e.preventDefault();
    clearInterval(this.state.intervalID);
    const intervalID = setInterval(this.decrementTimer, 1000);
    this.setState({
      intervalID,
    });
  }

  handleStopTimer(e) {
    e.preventDefault();
    console.log(this.state.intervalID);
    clearInterval(this.state.intervalID);
  }

  handleResetTimer(e) {
    e.preventDefault();
    clearInterval(this.state.intervalID);
    this.setMinutesSeconds(24, 60);
  }

  handleStartSmallBreak(e) {
    e.preventDefault();
    clearInterval(this.state.intervalID);
    this.setMinutesSeconds(4, 60);
    const intervalID = setInterval(this.decrementTimer, 1000);
    this.setState({
      intervalID,
    });
  }

  handleStartLongBreak(e) {
    e.preventDefault();
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
        onStartSmallBreak={this.handleStartSmallBreak}
        onStartLongBreak={this.handleStartLongBreak}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
      />
    );
  }
}
