import React from 'react';
import { View } from 'react-sketchapp';
import { colors, fonts } from './designSystem';

const height = 640;
const width = 360;
const Screen = (props) => (
  <View style={{ width: props.width ? props.width : width, shadowOpacity: 25, backgroundColor: colors.pandra, flexDirection: 'column', marginRight: 48, overflow: 'hidden' }}>
    {props.children}
  </View>
)

export default Screen;
