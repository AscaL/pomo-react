import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { shallow } from 'enzyme';

import App from '.././App';
import Timer from '../components/Timer';
import TimerContainer from '../containers/TimerContainer';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('should be able to run tests', () => {
    expect(1 + 2).toEqual(3);
  });
});

describe('TimerComponent', () => {
  it('renders Timer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Timer />, div);
  });
});

describe('TimerContainer', () => {
  it('renders TimerContainer without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TimerContainer />, div);
  });
});

describe('handleRestartPomodoro', () => {
  it('should set countdown timer and start countdown', done => {
    const timerContainer = TestUtils.renderIntoDocument(<TimerContainer />);
    timerContainer.handleRestartPomodoro();

    expect(timerContainer.state.minutes).toBe(24);
    expect(timerContainer.state.seconds).toBe(60);

    setTimeout(() => {
      expect(timerContainer.state.seconds).toBe(59);
      done();
    }, 1001);
  });
});
