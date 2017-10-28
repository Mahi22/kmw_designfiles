/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  subtitle: string,
  bcolor: string,
};
const TwoRow = ({ title, subtitle, bcolor }: P) => (
  <View style={{ flexDirection: 'column', backgroundColor: colors.pandra }}>
    <Text style={{
      ...fonts['Title 3'],
      flex: 1,
      marginTop: 44,
      marginLeft: 48,
      marginRight: 48
    }} >
      {title}
    </Text>
    <Text style={{
      ...fonts['Large'],
      flex: 1,
      marginTop: 24,
      paddingBottom: 42,
      marginLeft: 48,
      marginRight: 48,
      borderBottomWidth: 2,
      borderColor: bcolor
    }} >
      {subtitle}
    </Text>
  </View>
);

export default TwoRow;
