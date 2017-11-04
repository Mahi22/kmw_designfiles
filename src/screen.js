import React from 'react';
import { View } from 'react-sketchapp';
import { colors, fonts } from './designSystem';

import Filter from './interfaces/enquiry/Filter';

const height = 640;
const width = 360;
const Screen = (props) => (
  <View style={{ width, height, shadowOpacity: 25, backgroundColor: colors.pandra, flexDirection: 'column', marginRight: 48, overflow: 'hidden' }}>
    <Filter />
  </View>
)

export default Screen;
