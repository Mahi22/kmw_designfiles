import React, { Component } from 'react';

import { FiniteMachine, Switch, Match } from './FiniteMachine';
import { enquiry_management } from './state';

import { View } from 'react-sketchapp';
import Label from '../components/Label';

import Screen from '../screen';

import Timeline from '../interfaces/enquiry/Timeline';

// console.log(enquiry_management);

// defaultState
const defaultState = {
  data: null
};

// Reducer
const reducer = (state = defaultState, action) => {
  const { type, data } = action;

  if (type === "green") {
    console.log('YEAAAA');
    return { ...state, data: true}
  }

  return state;
};


export default class Main extends Component {
  render() {
    const state = {
      start: "",
      moves: ["", "BOTTOM_TAB_ADD_CLICK", "SUCCESS", "CLOSE", "CALENDAR_EXPANDING_CLICK", "BOTTOM_TAB_FILTER_CLICK"],
    };
    return (
      <View style={{ flexDirection: 'row', marginBottom: 64 }}>
      {state.moves.map((mv, index) => (<FiniteMachine
        log={true}
        key={`fs${index}`}
        chart={enquiry_management}
        reducer={reducer}
        state = {state}
        current= {index}
        render={machine => (
          <Screen>
            <Switch machine={machine} current={index}>
              <Match
                state="add_enquiry"
                render={({ transition }) => (
                  <Label>Add Enquiry</Label>
                )}
              />
              <Match
                state="detail_enquiry"
                render={({ transition }) => (
                  <Label>Detail Enquiry</Label>
                )}
              />
              <Match
                state="filter_enquiry"
                render={({ transition }) => (
                  <Label>Filter Enquiry</Label>
                )}
              />
              <Match
                state="overview"
                render={({ transition }) => (
                  <Timeline />
                )}
              />
              <Match
                state="overview.timeline"
                render={({ transition }) => (
                  <Label>Overview Timeline</Label>
                )}
              />
              <Match
                state="overview.calendar"
                render={({ transition }) => (
                  <Label>Overview Calendar</Label>
                )}
              />
              <Match
                state="search_enquiry"
                render={({ transition }) => (
                  <Label>Search Enquiry</Label>
                )}
              />
            </Switch>
          </Screen>
        )} />))}
      </View>
    );
  }
}
