import React from 'react';

function ResetTimerButton({ children, onResetTimer }) {
  console.log('onResetTimer', onResetTimer);
  console.log('children', children);

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

function TimeCounter({ children, props }) {
  console.log('TimeCounter props: ', props);
  console.log('TimeCounter children: ', children);
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
      <TimeCounter props={props} />
      <StartTimerButton onStartTimer={props.onStartTimer} />
      <StopTimerButton onStopTimer={props.onStopTimer} />
      <ResetTimerButton onResetTimer={props.onResetTimer} />
    </div>
  );
}
