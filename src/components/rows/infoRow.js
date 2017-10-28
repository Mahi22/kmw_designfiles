/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  label: string,
  value: string,
  first: boolean,
  last: boolean
};
const InfoRow = ({ label, value, first, last }: P) => (
  <View style={{ flexDirection: 'column', backgroundColor: colors.pandra }}>
    <Text style={{
      ...fonts['Regular'],
      flex: 1,
      marginTop: first ? 44 : 12,
      marginLeft: 48,
      marginRight: 48,
      color: colors.savla
    }} >
      {label}
    </Text>
    <Text style={{
      ...fonts['Large'],
      flex: 1,
      marginTop: 16,
      paddingBottom: last ? 42 : 12,
      marginLeft: 48,
      marginRight: 48,
      borderBottomWidth: last ? 2 : 0,
      borderColor: colors.goora,
      color: colors.kala
    }} >
      {value}
    </Text>
  </View>
);

export default InfoRow;
