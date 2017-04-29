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

function TimerHeader() {
  return (
    <PageHeader>
      Pomodoro Timer
    </PageHeader>
  );
}

// TODO: function is way too long need to component it
function displayTime(timeInSeconds) {
  if (timeInSeconds === 0) {
    return <Alert bsStyle="success">GOGO</Alert>;
  }
  if (timeInSeconds % 60 === 0) {
    return `${timeInSeconds / 60}:00`;
  }
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return seconds < 10 ? `${minutes.toFixed(0)}:0${seconds}` : `${minutes.toFixed(0)}:${seconds}`;
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
