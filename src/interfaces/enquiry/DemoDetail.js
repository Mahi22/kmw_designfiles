import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import BackNav from '../../components/navigation/BackNav';
import InfoRow from '../../components/rows/infoRow';
import RdRow from '../../components/rows/rdRow';
import Dot from '../../components/Dot';

import DateRow from '../../components/rows/dateRow';


import BasicButton from '../../components/forms/basicButton';
type P = {
  style?: any,
};

const DemoDetail = ({ style }: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column'}}>
    <BackNav title="John Doe" />
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: colors.goora  }}>
      <Dot size={24} style={{ marginRight: 12 }} />
      <Dot size={24} style={{ marginRight: 12 }} />
      <Dot size={24} selected />
    </View>
    <RdRow title="DEMO" />
    <View style={{ backgroundColor: colors.goora, flex: 1 }}>
      <DateRow first last date="24" day="Tue">
        <InfoRow label="Date of Demo" value="10/10/17" />
        <InfoRow label="Source of Demo" value="Activity 1, 3/10/17" />
        <InfoRow label="Interaction" value="some interaction text" />
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
          <BasicButton title="+ Follow up" />
          <BasicButton title="+ CUE" />
          <BasicButton title="+ Retail Finance" />
        </View>
      </DateRow>
    </View>
  </View>
);

export default DemoDetail;
