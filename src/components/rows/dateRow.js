/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  subtitle: string,
  date: string,
  day: string,
  children?: any,
};
const DateRow = ({ title, subtitle, date, day, children }: P) => (
  <View style={{ flexDirection: 'row'}}>
    <View style={{flexDirection: 'column', width: 24, marginLeft: 12, marginRight: 10 }}>
      <Text style={{ ...fonts['Large'], color: colors.savla, textAlign: 'center' }}>
        {date}
      </Text>
      <Text style={{ ...fonts['Micro'], color: colors.savla, textAlign: 'center' }}>
        {day}
      </Text>
    </View>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      backgroundColor: colors.pandra,
      paddingLeft: 14,
      paddingRight: 8,
      paddingTop: 24,
      paddingBottom: 24,
      marginRight: 16,
      borderWidth: 2,
      borderColor: colors.goora,
      boxSizing: 'border-box' }}>
      {children}
    </View>
  </View>
);

export default DateRow;
