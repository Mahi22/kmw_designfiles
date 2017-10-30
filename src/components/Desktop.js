/* @flow */
import React from 'react';
import { View, Artboard } from 'react-sketchapp';
import { colors } from '../designSystem';
import Label from './Label';

type P = {
  width?: number,
  height?: number,
  name?: string,
  children?: any,
  overflow?: boolean
};
const Desktop = ({ width, height, children, name, overflow }: P) => (
  <View name={name} style={{ width: width ? width : 1440, height: height ? height : 1024, flexDirection: 'column', borderColor: '#c8c8c8', borderWidth: 2, backgroundColor: colors.goora, marginRight: 108, overflow: overflow ? 'auto' : 'hidden', flexDirection: 'column', }}>
    {children}
  </View>
);

export default Desktop;
