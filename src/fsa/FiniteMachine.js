import React, { Component } from "react";
import { Machine } from 'xstate';
import * as PropTypes from 'prop-types';


class FiniteMachine extends Component {
  machine = Machine(this.props.chart);

  state = {
    data: this.props.reducer(undefined, { type: "@init" }),
    machineState: this.getMachineState()
  }

  getMachineState() {
    // console.log(this.machine);
    const { state, current } = this.props;
    let machineState;

    if (state.start) {
      machineState = this.machine.transition(state.start, "").toString();
    } else {
      machineState = this.machine.getInitialState();
    }

    // console.log(machineState);
    state.moves.forEach((mv, index) => {
      if (index <= current && index > 0) {
        machineState = this.machine.transition(machineState, mv);
      }
      machineState = machineState.toString();
    });


    return machineState;
  }

  transition = (actionType, newData) => {
    const { log, chart, reducer } = this.props;
    const { data, machineState } = this.state;


    const nextState = this.machine
          .transition(machineState, actionType)
          .toString();

    const action = {
      data: newData,
      nextState,
      type: `${machineState}.${actionType}`
    }

    if (log) {
      console.log(chart.id, action.type, action.data)
    }

    this.setState({
      data: reducer(data, action),
      machineState: nextState
    },
    log
      ? () => {
        console.log(chart.id, this.state.machineState, this.state.data);
      }
      : undefined
    );
  }

  render() {
    return this.props.render({
      state: this.state.machineState,
      data: this.state.data,
      transition: this.transition
    });
  }
}

class Match extends Component {
  static propTypes = {
    machine: PropTypes.shape({
      state: PropTypes.string,
      transition: PropTypes.func
    }),
    state: PropTypes.string,
    partial: PropTypes.bool,
    conditional: PropTypes.bool
  }

  static defaultProps = {
    partial: false,
    conditional: true
  }

  render() {
    const {
      component: Component,
      render,
      partial,
      conditional,
      machine,
      state
    } = this.props;

    const match = partial
      ? machine.state.startsWith(state)
      : machine.state === state;

    return conditional ? (
      match ? (
        render ? (
          render(machine)
        ) : (
          <Component {...machine} />
        )
      ) : null
    ) : render ? (
      render(machine)
    ) : (
      <Component {...machine} />
    )
  }
}

class Switch extends Component {
  static propTypes = {
    machine: PropTypes.shape({
      state: PropTypes.string.isRequired,
      transition: PropTypes.func.isRequired
    }).isRequired
  }


  render() {
    const { children, machine } = this.props;

    let match = null;

    React.Children.forEach(children, (child, index) => {
      if (match) return;
      if (child.props.state === machine.state) {
        match = child;
      }
    });

    return React.cloneElement(match, { machine });
  }
}

export { FiniteMachine, Match, Switch };
