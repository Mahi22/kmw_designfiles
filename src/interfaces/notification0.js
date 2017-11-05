import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

import BackNav from '../components/navigation/BackNav';
import DateRow from '../components/rows/dateRow';

import NoRow from '../components/rows/noRow';


type P = {
  values?: any,
  height: number,
};

const Notification0 = ({ values, height }: P) => (
  <View style={{ flex: 1, flexDirection: 'column', height, backgroundColor: colors.goora }}>
    <BackNav title="Notification" />
    <NoRow title="No Notifications yet" />
  </View>
)

export default Notification0;
