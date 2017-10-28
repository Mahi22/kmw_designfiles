/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  left: string,
  right: string,
  middle: string
};
const BottomTabNav = ({ left = 'Search', right = 'Filter', middle = 'ADD' }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra, paddingTop: 14, paddingBottom: 16, borderTopColor: colors.goora, borderTopWidth: 2, borderBottomWidth: 2, borderBottomColor: '#c8c8c8'  }}>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <Text style={{ ...fonts['Regular'], color: colors.cold }}>{left}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <Text style={{ ...fonts['Regular'], color: colors.cold }}>{middle}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
      <Text style={{ ...fonts['Regular'], color: colors.cold }}>{right}</Text>
    </View>
  </View>
);

export default BottomTabNav;
