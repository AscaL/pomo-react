import React from 'react';

function ResetTimerButton({ onResetTimer }) {
  return (
    <button type="button" onClick={onResetTimer}>
      resetTimer!
    </button>
  );
}

function TimerHeader() {
  return (
    <div>
      <h1>
        Pomodoro Timer
      </h1>
    </div>
  );
}

function TimerCounter({ props }) {
  console.log('TimerCounter props: ', props);
  return (
    <p>
      {props.minutes * props.seconds}
    </p>
  );
}

function StartTimerButton({ onStartTimer }) {
  return (
    <button type="button" onClick={onStartTimer}>
      startTimer!
    </button>
  );
}

function StopTimerButton({ onStopTimer }) {
  return (
    <button type="button" onClick={onStopTimer}>
      StopTimer!
    </button>
  );
}

// is it correct to pass props like this?
export default function Timer(props) {
  console.log('props:', props);

  return (
    <div>
      <TimerHeader />
      <TimerCounter props={props} />
      <StartTimerButton onStartTimer={props.onStartTimer} />
      <StopTimerButton onStopTimer={props.onStopTimer} />
      <ResetTimerButton onResetTimer={props.onResetTimer} />
    </div>
  );
}
