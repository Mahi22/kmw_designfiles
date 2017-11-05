import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import BackNav from '../../components/navigation/BackNav';
import InfoRow from '../../components/rows/infoRow';
import RdRow from '../../components/rows/rdRow';
import Dot from '../../components/Dot';

import DateRow from '../../components/rows/dateRow';
import TextBox from '../../components/forms/textBox';

import BasicButton from '../../components/forms/basicButton';
type P = {
  style?: any,
};

const EnquiryDetail = ({ style }: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column'}}>
    <BackNav title="John Doe" />
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: colors.goora  }}>
      <Dot size={24} style={{ marginRight: 12 }} />
      <Dot size={24} selected />
    </View>
    <RdRow title="Enquiries" />
    <View style={{ backgroundColor: colors.goora, flex: 1 }}>
      <DateRow first last date="24" day="Tue">
        <TextBox label="Customer interest" value="" placeholder="Model 1" />
        <TextBox label="Estimate Date of Purchase" value="12/12/17" placeholder="" focus />
        <TextBox label="Source of Enquiry" value="Activity 1, 3/10/17" placeholder="" />
        <TextBox label="Referred by" value="Awesome User name" placeholder="" />
        <TextBox label="Influencer Name" value="" placeholder="" />
        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around'}}>
          <BasicButton title="+ Follow up" />
          <BasicButton title="+ Demo" />
          <BasicButton title="+ CUE" />
        </View>
      </DateRow>
    </View>
  </View>
);

export default EnquiryDetail;
