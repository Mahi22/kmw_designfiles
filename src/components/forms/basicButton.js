/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  style?: any
};
const BasicButton = ({ title, style = {} }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra }}>
    <Text style={{
      ...fonts['Small'],
      marginTop: 12,
      marginBottom: 44,
      // borderBottomWidth: 2,
      borderColor: colors.cold,
      color: colors.cold,
      ...style
    }} >
      {title}
    </Text>
  </View>
);

export default BasicButton;
