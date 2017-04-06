import React, { Component } from 'react';
import Timer from '../components/Timer';

export default class TimerContainer extends Component {
  constructor() {
    super();
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.handleResetTimer = this.handleResetTimer.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.state = {
      minutes: 25,
      seconds: 60,
      intervalID: 0,
    };
  }

  componentWillUnmount() {
    console.log('comp will unmount');
    clearInterval(this.state.intervalID);
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
    this.setState({
      minutes: 25,
      seconds: 60,
    });
  }

  decrementTimer() {
    console.log('state minutes:', this.state.minutes);
    console.log('state seconds:', this.state.seconds);

    this.setState({
      seconds: this.state.seconds - 1,
    });
  }

  render() {
    return (
      <Timer
        onStartTimer={this.handleStartTimer}
        onStopTimer={this.handleStopTimer}
        onResetTimer={this.handleResetTimer}
        minutes={this.state.minutes}
        seconds={this.state.seconds}
      />
    );
  }
}
