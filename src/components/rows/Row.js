/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  first: boolean,
  last: boolean,
  margin: number,
  children?: string,
};
const Row = ({ children, margin, first, last }: P) => (
  <View style={{
    flexDirection: 'column',
    backgroundColor: colors.pandra,
    marginLeft: margin ? margin : 16,
    marginRight: margin ? margin : 16,
    marginTop: first ? 44 : 12,
    marginBottom: last ? 44 : 12
  }}>
    {children}
  </View>
);

export default Row;
