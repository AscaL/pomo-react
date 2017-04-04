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

  componentDidMount() {
    console.log('comp did mounts');
    const intervalID = setInterval(
      this.decrementTimer /*(this.state.minutes)*/,
      1000
    );
    console.log('intervalID', intervalID);
  }

  componentWillUnmount() {
    console.log('comp will unmount');
    clearInterval(this.state.intervalID);
  }

  handleStartTimer(e) {
    e.preventDefault();

    const intervalID = setInterval(this.decrementTimer(this.state.minutes), 10);
    // console.log('intervalID', intervalID);
    // TODO: function that starts the timer and decrements it
  }

  handleStopTimer(e) {
    e.preventDefault();
    // TODO: function that stops the timer
    this.setState({
      minutes: 20,
      seconds: 60,
    });
  }

  handleResetTimer(e) {
    e.preventDefault();
    this.setState({
      minutes: 25,
      seconds: 60,
    });
  }

  decrementTimer(/*currentTimer*/) {
    console.log('decrementTimer');
    console.log('state min', this.state.minutes);
    // console.log('currteim ', currentTimer);

    this.setState({
      minutes: this.state.minutes - 1,
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
