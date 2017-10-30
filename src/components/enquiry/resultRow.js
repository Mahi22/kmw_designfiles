/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';


function getBorderColor(status) {
  if (status.indexOf('HOT') !== -1 || status.indexOf('HOTF') !== -1) {
    return colors.hot;
  } else if (status.indexOf('WARM') !== -1 || status.indexOf('WARMF') !== -1) {
    return colors.warm;
  } else {
    return colors.savla;
  }
}


type P = {
  title: string,
  subtitle: string,
  style?: any,
  status?: any
};
const ResultRow = ({ title, subtitle, style, status = [] }: P) => (
  <View style={{ flexDirection: 'column', paddingLeft: 12, paddingRight: 16, paddingTop: 32, paddingBottom: 24, ...style }}>
    <View style={{
      flexDirection: 'row',
      marginBottom: 8,
    }}>
      <View style={{ width: 16, height: 4, borderRadius: 2, backgroundColor: colors.pandra, marginRight: 4, borderWidth: 1, borderColor: getBorderColor(status) }} />
      <View style={{ width: 16, height: 4, borderRadius: 2, backgroundColor: colors.warm, marginRight: 4, borderWidth: 1, borderColor: colors.warm }} />
      <View style={{ width: 16, height: 4, borderRadius: 2, backgroundColor: colors.hot, marginRight: 4, borderWidth: 1, borderColor: colors.hot }} />
      <View style={{ width: 16, height: 4, borderRadius: 2, backgroundColor: colors.warm, marginRight: 4, borderWidth: 1, borderColor: colors.warm }} />
      <View style={{ width: 16, height: 4, borderRadius: 2, backgroundColor: colors.hot, marginRight: 4, borderWidth: 1, borderColor: colors.hot }} />
      <View style={{ width: 16, height: 4, borderRadius: 2, backgroundColor: colors.warm, marginRight: 4, borderWidth: 1, borderColor: colors.warm }} />
    </View>

    <Text style={{
      ...fonts['Large'],
      flex: 1,
    }} >
      {title}
    </Text>
    <Text style={{
      ...fonts['Small'],
      flex: 1,
      marginTop: 16,
      color: colors.savla
    }} >
      {subtitle}
    </Text>
  </View>
);

export default ResultRow;
