import React from 'react';

function TimerHeader() {
  return (
    <div>
      <h1>
        Pomodoro Timer
      </h1>
    </div>
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
    <button type="button" onClick={onStartSmallBreak}>
      Start Small Break
    </button>
  );
}

function StartLongBreakButton({ onStartLongBreak }) {
  return (
    <button type="button" onClick={onStartLongBreak}>
      Start Long Break
    </button>
  );
}

function StartTimerButton({ onStartTimer }) {
  return (
    <button type="button" onClick={onStartTimer}>
      Start Timer
    </button>
  );
}

function StopTimerButton({ onStopTimer }) {
  return (
    <button type="button" onClick={onStopTimer}>
      Stop Timer
    </button>
  );
}

function ResetTimerButton({ onResetTimer }) {
  return (
    <button type="button" onClick={onResetTimer}>
      Reset Timer
    </button>
  );
}

// is it correct to pass props like this?
export default function Timer(props) {
  return (
    <div>
      <TimerHeader />
      <TimerCounter props={props} />
      <StartTimerButton onStartTimer={props.onStartTimer} />
      <StopTimerButton onStopTimer={props.onStopTimer} />
      <ResetTimerButton onResetTimer={props.onResetTimer} />
      <StartSmallBreakButton onStartSmallBreak={props.onStartSmallBreak} />
      <StartLongBreakButton onStartLongBreak={props.onStartLongBreak} />
    </div>
  );
}
