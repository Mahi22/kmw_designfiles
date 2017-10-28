/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
};
const LdRow = ({ title }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.goora }}>
    <View style={{ width: 12, borderWidth: 1, borderColor: colors.kala, height: 12, marginLeft: 16, marginTop: 52, borderRadius: 6}} />
    <Text style={{
      ...fonts['Title 4'],
      flex: 1,
      marginTop: 44,
      paddingBottom: 42,
      marginLeft: 20,
      marginRight:  48,
      borderBottomWidth: 2,
      borderColor: colors.savla
    }} >
      {title}
    </Text>
  </View>
);

export default LdRow;
