import React from 'react';
import {
  PageHeader,
  Button,
  ButtonGroup,
  ButtonToolbar,
} from 'react-bootstrap';

function TimerHeader() {
  return (
    <PageHeader>
      <h1>
        Pomodoro Timer
      </h1>
    </PageHeader>
  );
}

function displayTime(timeInSeconds) {
  // need better way to display
  console.log('timeInSeconds', timeInSeconds);
  if (timeInSeconds === 0) {
    // add way to comunicate that time is ended
    console.log('timer ended');
  }
  if (timeInSeconds % 60 === 0) {
    return timeInSeconds / 60;
  } else {
    const minutes = Math.floor(timeInSeconds / 60);
    console.log('minutes', minutes);
    const seconds = timeInSeconds % 60;
    console.log('seconds', seconds);
    return minutes.toFixed(0) + ' : ' + seconds;
  }
}

function TimerCounter({ props }) {
  // need better way to display
  console.log('TimerCounter props: ', props);
  const minutesInSeconds = props.minutes * 60;
  console.log('minutesInSeconds', minutesInSeconds);
  const timeInSeconds = minutesInSeconds + props.seconds;
  console.log('timeInSeconds', timeInSeconds);
  return (
    <p>
      {displayTime(timeInSeconds)}

    </p>
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

// is it correct to pass props like this?
export default function Timer(props) {
  return (
    <div>
      <TimerHeader />
      <TimerCounter props={props} />
      <ButtonToolbar>
        <ButtonGroup vertical>
          <StartTimerButton onStartTimer={props.onStartTimer} />
          <StopTimerButton onStopTimer={props.onStopTimer} />
          <ResetTimerButton onResetTimer={props.onResetTimer} />
        </ButtonGroup>
        <ButtonGroup vertical>
          <StartSmallBreakButton onStartSmallBreak={props.onStartSmallBreak} />
          <StartLongBreakButton onStartLongBreak={props.onStartLongBreak} />
        </ButtonGroup>
      </ButtonToolbar>
    </div>
  );
}
