/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  subtitle: string
};
const TaRow = ({ title, subtitle }: P) => (
  <View style={{ flexDirection: 'column', backgroundColor: colors.pandra }}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{
        ...fonts['Title 2'],
        flex: 1,
        marginTop: 44,
        marginLeft: 48
      }} >
        {title}
      </Text>
      <View style={{ width: 24, borderWidth: 1, borderColor: 'red', height: 24, marginRight: 16, marginTop: 50}} />
    </View>
    <Text style={{
      ...fonts['Title 3'],
      flex: 1,
      marginTop: 24,
      paddingBottom: 42,
      marginLeft: 48,
      marginRight: 48,
      borderBottomWidth: 2,
      borderColor: colors.goora
    }} >
      {subtitle}
    </Text>
  </View>
);

export default TaRow;
