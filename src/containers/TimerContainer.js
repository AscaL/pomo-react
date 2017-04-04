import React, { Component } from 'react';
import Timer from '../components/Timer';

export default class TimerContainer extends Component {
  constructor() {
    super();
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleStopTimer = this.handleStopTimer.bind(this);
    this.handleResetTimer = this.handleResetTimer.bind(this);
    this.state = {
      minutes: 25,
      seconds: 60,
    };
  }

  handleStartTimer(e) {
    e.preventDefault();
    // TODO: function that starts the timer and decrements it
  }

  handleStopTimer(e) {
    e.preventDefault();
    // TODO: function that starts the timer and decrements it
  }

  handleResetTimer(e) {
    e.preventDefault();
    this.setState({
      minutes: 25,
      seconds: 60,
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
