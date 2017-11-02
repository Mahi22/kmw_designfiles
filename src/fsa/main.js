import React, { Component } from 'react';
import { FiniteMachine, Switch, Match } from './components/FiniteMachine';

const chart = {
  id: 'light',
  initial: 'green',
  states: {
    green: {
      on: {
        TIMER: 'yellow'
      }
    },
    yellow: {
      on: {
        TIMER: 'red',
      }
    },
    red: {
      on: {
        TIMER: 'green'
      }
    }
  }
};


// defaultState
const defaultState = {
  green: false,
  yellow: false,
  red: false
};

// Reducer
const reducer = (state = defaultState, action) => {
  const { type, data } = action;

  if (type === "green") {
    console.log('YEAAAA');
    return { ...state, green: true}
  }

  return state;
};



export default class Main extends Component {
  render() {
    const moves = ["","TIMER", "TIMER"];
    return (
      <div>
      {moves.map((mv, index) => (<FiniteMachine
        log={true}
        chart={chart}
        reducer={reducer}
        render={machine => (
          <div>
            <Switch machine={machine} moves={moves} current={index}>
              <Match
                state="red"
                render={({ transition }) => (
                  <div onClick={() =>{ transition("TIMER", "test") }}>RED</div>
                )}
              />
              <Match
                state="green"
                render={({ transition }) => (
                  <div onClick={() =>{ transition("TIMER", "test") }}>GREEN</div>
                )}
              />
              <Match
                state="yellow"
                render={({ transition }) => (
                  <div onClick={() =>{ transition("TIMER", "test") }}>YELLOW</div>
                )}
              />
            </Switch>
          </div>
        )} />))}
      </div>
    );
  }
}
