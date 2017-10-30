import React from 'react';
import { View } from 'react-sketchapp';
import { colors, fonts } from './designSystem';
import Timeline from './screens/enquiry/Timeline';
import Search from './screens/enquiry/Search_enquiry';

const height = 640;
const width = 360;
export default Screen = (props) => (
  <View style={{ width, height, shadowOpacity: 25, backgroundColor: colors.pandra, flexDirection: 'column' }}>
    <Search />
  </View>
)
