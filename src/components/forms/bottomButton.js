/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  label: string,
  count: number,
  disabled?: boolean,
  styles: any
};
const BottomButton = ({ count = 1, label, disabled, styles }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: disabled ? colors.goora : colors.cold, paddingTop: 14, paddingBottom: 14, borderTopColor: colors.goora, borderTopWidth: 2, borderBottomWidth: 2, borderBottomColor: '#c8c8c8',...styles}}>
    {
      label ?
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{...fonts['Large'],color: colors.pandra}}>
          {label}
        </Text>
      </View> :
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <View style={{ width: 18, borderWidth: 1, borderColor: colors.pandra, height: 18, marginTop: 6, marginRight: 16, borderRadius: 9}} />
        <View style={{ width: 18, borderWidth: 1, borderColor: colors.pandra, height: 18, marginTop: 6, marginRight: 16, borderRadius: 9}} />
        <View style={{ width: 18, borderWidth: 1, borderColor: colors.pandra, height: 18, marginTop: 6, borderRadius: 9}} />
      </View>
    }
  </View>
);

export default BottomButton;
