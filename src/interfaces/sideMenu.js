import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

import RdRow from '../components/rows/rdRow';

type P = {
  values?: any,
  height: number,
};

const sideMenu = ({ values, height }: P) => (
  <View style={{ flex: 1, flexDirection: 'row', height }}>
    <View style={{ flex: 3, borderColor: colors.goora, borderRightWidth: 2, height, flexDirection: 'column' }}>
      <View style={{ height: 120, backgroundColor: colors.kala, justifyContent: 'center', flexDirection: 'column'}}>
        <Text style={{
          ...fonts['Title 4'],
          marginLeft: 48,
          color: colors.pandra
        }} >
          Awesome User Name
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <RdRow title="Customer Management" />
        <RdRow title="Activity Management" disabled />
      </View>
      <RdRow title="LOGOUT" />
    </View>
    <View style={{ flex: 1, opacity: 0.5, backgroundColor: colors.goora }} />
  </View>
)

export default sideMenu;
