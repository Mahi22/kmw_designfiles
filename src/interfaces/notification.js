import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

import BackNav from '../components/navigation/BackNav';
import DateRow from '../components/rows/dateRow';

import TaRow from '../components/rows/taRow';


type P = {
  values?: any,
  height: number,
};

const Notification = ({ values, height }: P) => (
  <View style={{ flex: 1, flexDirection: 'column', height, backgroundColor: colors.goora }}>
    <BackNav title="Notification" />
    <DateRow first date="12" day="Mon">
      <TaRow title="Activity 2" subtitle="starts at 9" margin={2} />
    </DateRow>
    <DateRow>
      <TaRow title="Activity 1" subtitle="completed" margin={2} />
    </DateRow>
    <DateRow first date="9" day="Fri">
      <TaRow title="Activity Exhibition" subtitle="completed" margin={2} />
    </DateRow>
  </View>
)

export default Notification;
