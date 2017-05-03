import React from 'react';
import {
  PageHeader,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Pager,
  Alert,
  ProgressBar,
} from 'react-bootstrap';

function notifyOnTimerOver() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.');
    return;
  }
  if (Notification.permission !== 'granted') Notification.requestPermission();
  else {
    const notification = new Notification('Timer is OVER!', {
      icon: 'http://ob9oayzh3.bkt.clouddn.com/images.png',
      body: 'Timer is Over!',
    });
  }
}

function displayTime(timeInSeconds) {
  if (timeInSeconds === 0) {
    notifyOnTimerOver();
    return <Alert bsStyle="success">Go Take a Break!</Alert>;
  }
  if (timeInSeconds % 60 === 0) {
    return `${timeInSeconds / 60}:00`;
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return seconds < 10 ? `${minutes.toFixed(0)}:0${seconds}` : `${minutes.toFixed(0)}:${seconds}`;
}

function TimerHeader() {
  return (
    <PageHeader>
      Pomodoro Timer
    </PageHeader>
  );
}

function TimerCounter({ props }) {
  const minutesInSeconds = props.minutes * 60;
  const timeInSeconds = minutesInSeconds + props.seconds;
  return (
    <div>
      <h2>{displayTime(timeInSeconds)}</h2>
    </div>
  );
}

function TimerProgressBar({ props }) {
  const minutesInSeconds = props.minutes * 60;
  const timeInSeconds = minutesInSeconds + props.seconds;
  const onePercent = 1500 / 100;
  const percentage = Math.floor(timeInSeconds / onePercent);

  return (
    <ProgressBar bsStyle="success" now={100 - percentage} label={`${100 - percentage}%`} active />
  );
}

function StartTimerButton({ onStartTimer }) {
  return (
    <Button bsStyle="success" onClick={onStartTimer}>
      Start Timer
    </Button>
  );
}

function StopTimerButton({ onStopTimer }) {
  return (
    <Button bsStyle="warning" onClick={onStopTimer}>
      Stop Timer
    </Button>
  );
}

function ResetTimerButton({ onResetTimer }) {
  return (
    <Button bsStyle="danger" onClick={onResetTimer}>
      Reset Timer
    </Button>
  );
}

function RestartPomodoroButton({ onRestartPomodoro }) {
  return (
    <Button bsStyle="info" onClick={onRestartPomodoro}>
      Restart Pomodoro
    </Button>
  );
}

function StartSmallBreakButton({ onStartSmallBreak }) {
  return (
    <Button bsStyle="info" onClick={onStartSmallBreak}>
      Start Small Break
    </Button>
  );
}

function StartLongBreakButton({ onStartLongBreak }) {
  return (
    <Button bsStyle="info" onClick={onStartLongBreak}>
      Start Long Break
    </Button>
  );
}

// is it correct to pass props like this?
export default function Timer(props) {
  return (
    <div>
      <TimerHeader />
      <TimerCounter props={props} />
      <TimerProgressBar props={props} />
      <ButtonToolbar>
        <Pager>
          <StartTimerButton onStartTimer={props.onStartTimer} />
          <StopTimerButton onStopTimer={props.onStopTimer} />
          <ResetTimerButton onResetTimer={props.onResetTimer} />
        </Pager>
        <ButtonGroup>
          <Pager>
            <RestartPomodoroButton onRestartPomodoro={props.onRestartPomodoro} />
            <StartSmallBreakButton onStartSmallBreak={props.onStartSmallBreak} />
            <StartLongBreakButton onStartLongBreak={props.onStartLongBreak} />
          </Pager>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}
