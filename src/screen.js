import React from 'react';
import { View } from 'react-sketchapp';
import { colors, fonts } from './designSystem';

import Filter from './interfaces/enquiry/Filter';
import Timeline from './interfaces/enquiry/Timeline';
import SearchE from './interfaces/enquiry/Search_enquiry';
import BasicDetail from './interfaces/enquiry/BasicDetail';
import EnquiryDetail from './interfaces/enquiry/EnquiryDetail';
import DemoDetail from './interfaces/enquiry/DemoDetail';

import SideMenu from './interfaces/sideMenu';
import Notification from './interfaces/notification';
import Notification0 from './interfaces/notification0';

import AddBasic00 from './interfaces/enquiry/AddBasic0';
import AddBasic01 from './interfaces/enquiry/AddBasic01';
import AddBasic10 from './interfaces/enquiry/AddBasic10';
import AddBasic11 from './interfaces/enquiry/AddBasic11';
import AddBasic20 from './interfaces/enquiry/AddBasic20';

const height = 640;
const width = 360;
const Screen = (props) => (
  <View style={{ width, height: props.height ? height : 'auto', shadowOpacity: 25, backgroundColor: colors.pandra, flexDirection: 'column', marginRight: 48, overflow: 'hidden' }}>
    <AddBasic20 />
</View>
)

export default Screen;
