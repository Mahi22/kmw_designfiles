/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
};
const FlRow = ({ title }: P) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={{
      ...fonts['Title 4'],
      flex: 1,
      marginTop: 24,
      paddingBottom: 22,
      marginLeft: 48,
      borderBottomWidth: 2,
      borderColor: colors.gora
    }} >
      {title}
    </Text>
    <View style={{ width: 24, borderWidth: 1, borderColor: colors.cold, height: 24, marginRight: 16, marginTop: 26}} />
  </View>
);

export default FlRow;
