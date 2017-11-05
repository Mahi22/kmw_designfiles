import React from 'react';
import { View } from 'react-sketchapp';
import { colors, fonts } from './designSystem';

import Filter from './interfaces/enquiry/Filter';
import Timeline from './interfaces/enquiry/Timeline';
import SearchE from './interfaces/enquiry/Search_enquiry';
import BasicDetail from './interfaces/enquiry/BasicDetail';

import SideMenu from './interfaces/sideMenu';
import Notification from './interfaces/notification';

const height = 640;
const width = 360;
const Screen = (props) => (
  <View style={{ width, height: props.height ? height : 'auto', shadowOpacity: 25, backgroundColor: colors.pandra, flexDirection: 'column', marginRight: 48, overflow: 'hidden' }}>
    <BasicDetail height={height} />
</View>
)

export default Screen;
