/* @flow */
import React from 'react';
import { Text, View } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

type P = {
  label: string,
  value: string,
  last?: boolean,
  style?: any
};
const Cell = ({ label, value, last, style }: P) => (
  <View style={{flexDirection: 'row', flex: 1, marginRight: last ? 0 : 8, ...style}}>
    <Text
      style={{
        ...fonts['Small'],
        flex: 3
      }}
    >
      {label}
    </Text>
    <Text
      style={{
        ...fonts['Small'],
        color: colors.cold,
        flex: 1
      }}
    >
      {value}
    </Text>
  </View>
);

export default Cell;
