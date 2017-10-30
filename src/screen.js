import React from 'react';
import { View } from 'react-sketchapp';
import { colors, fonts } from './designSystem';
import Timeline from './screens/enquiry/Timeline';

const height = 640;
const width = 360;
export default Screen = (props) => (
  <View style={{ width, height, borderColor: colors.savla, borderWidth: 2, backgroundColor: colors.pandra, flexDirection: 'column' }}>
    <Timeline />
  </View>
)
