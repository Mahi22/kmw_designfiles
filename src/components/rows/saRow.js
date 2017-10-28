/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
};
const SaRow = ({ title }: P) => (
  <View style={{ flexDirection: 'row' }}>
    <Text style={{
      ...fonts['Title 4'],
      flex: 1,
      marginTop: 44,
      paddingBottom: 42,
      marginLeft: 48,
      borderBottomWidth: 2,
      borderColor: colors.savla
    }} >
      {title}
    </Text>
    <View style={{ width: 24, borderWidth: 1, borderColor: colors.cold, height: 24, marginRight: 16, marginTop: 46}} />
  </View>
);

export default SaRow;
