/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  label: string,
  selected: boolean
};
const RadioButton = ({ label, selected }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra }}>
    <View style={{ width: 12, borderWidth: 1, borderColor: colors.savla, borderRadius: 6, height: 12, marginLeft: 48, marginTop: 6}}>
     {
       selected ?
       <View style={{ width: 8, borderRadius: 6, height: 8, backgroundColor: colors.savla, margin: 1}} /> : null
     }
    </View>
    <Text style={{
      ...fonts['Large'],
      flex: 1,
      marginLeft: 16,
    }} >
      {label}
    </Text>
  </View>
);

export default RadioButton;
