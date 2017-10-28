/* @flow */
import React from 'react';
import { Text, View } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

type P = {
  size: number,
  style?:any,
  selected?:boolean
};
const Dot = ({ style, size, selected }: P) => (
  <View style={{ width: size, height: size, borderRadius: (size / 2) , backgroundColor: selected ? colors.pandra : colors.goora, borderColor: colors.pandra, borderWidth: 2 , ...style }} />
);

export default Dot;
