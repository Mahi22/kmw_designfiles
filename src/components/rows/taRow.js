/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  subtitle: string,
  margin: number,
};
const TaRow = ({ title, subtitle, margin }: P) => (
  <View style={{ flexDirection: 'column', backgroundColor: colors.pandra }}>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{
        ...fonts['Title 3'],
        flex: 1,
        marginTop: margin ? margin : 0,
        marginBottom: 16
      }} >
        {title}
      </Text>
      <View style={{ width: 24, borderWidth: 1, borderColor: 'red', height: 24, marginRight: 16, marginTop: margin ? (margin + 4) : 0}} />
    </View>
    <Text style={{
      ...fonts['Large'],
      flex: 1,
      marginBottom: margin ? margin : 0,
    }} >
      {subtitle}
    </Text>
  </View>
);

export default TaRow;
