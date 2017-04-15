import React from 'react';
import {
  PageHeader,
  Button,
  ButtonGroup,
  ButtonToolbar,
  Pager,
  Alert,
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
  return `${minutes.toFixed(0)}:${seconds}`;
}

function TimerCounter({ props }) {
  console.log('min, sec: ', props.minutes, props.seconds);
  const minutesInSeconds = props.minutes * 60;
  const timeInSeconds = minutesInSeconds + props.seconds;
  return (
    <div>
      {displayTime(timeInSeconds)}
    </div>
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
      <ButtonToolbar>
        <Pager>
          <StartTimerButton onStartTimer={props.onStartTimer} />
          <StopTimerButton onStopTimer={props.onStopTimer} />
          <ResetTimerButton onResetTimer={props.onResetTimer} />
        </Pager>
        <ButtonGroup>
          <Pager>
            <StartSmallBreakButton
              onStartSmallBreak={props.onStartSmallBreak}
            />
            <StartLongBreakButton onStartLongBreak={props.onStartLongBreak} />
          </Pager>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}
