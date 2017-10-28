/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  label: string,
  value: string,
  first: boolean,
  last: boolean,
  placeholder: string,
  focus: boolean,
  error: boolean,
  icon: boolean,
  margin?: number
};
const TextBox= ({ label, value, first, last, placeholder, focus, error, icon, margin }: P) => (
  <View style={{ flexDirection: 'column', backgroundColor: colors.pandra }}>
    {
      label ?
      <Text style={{
        ...fonts['Large'],
        flex: 1,
        marginTop: first ? 44 : 12,
        marginLeft: 48,
        marginRight: 48,
        color: colors.savla
      }} >
        {label}
      </Text> : null
    }
    <View style={{
      flex: 1,
      flexDirection: 'row',
      marginTop: 16,
      marginBottom: last ? 44 : 12,
      paddingTop: 12,
      paddingBottom: 12,
      paddingLeft: 12,
      marginLeft: margin ? margin : 48,
      marginRight: margin ? margin : 48,
      boxSizing: 'border-box',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: focus ? colors.savla : error ? colors.hot : colors.goora
    }}>
      {
        icon ?
        <View style={{ width: 12, borderWidth: 1, borderColor: colors.cold, height: 12, marginRight: 8, marginTop: 4}} /> :
        null
      }
      <Text style={{
        ...fonts['Regular'],
        color: value === '' ? colors.savla : error ? colors.hot : colors.kala
      }} >
        {value === '' ? placeholder : value}
      </Text>
    </View>
  </View>
);

export default TextBox;
