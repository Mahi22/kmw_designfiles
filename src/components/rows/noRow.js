/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import Label from '../Label';

type P = {
  title: string,
  margin: number,
  children?: string,
};
const NoRow = ({ children, margin, title }: P) => (
  <View style={{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors.pandra,
  }}>
    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 48 }}>
      <View style={{ width: 80, borderWidth: 1, borderColor: colors.cold, height: 80}} />
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Label style={{textAlign: 'center'}}>{title}</Label>
    </View>
  </View>
);

export default NoRow;
