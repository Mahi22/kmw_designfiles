import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import BackNav from '../../components/navigation/BackNav';
import InfoRow from '../../components/rows/infoRow';
import RdRow from '../../components/rows/rdRow';
import Row from '../../components/rows/Row';
import Dot from '../../components/Dot';

import TextBox from '../../components/forms/textBox';

import BasicButton from '../../components/forms/basicButton';

type P = {
  style?: any,
};

const AddBasic11 = ({ style}: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column'}}>
    <BackNav title="New Enquiry" />
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: colors.goora  }}>
      <Dot size={24} style={{ marginRight: 12 }} />
      <Dot size={24} selected />
    </View>
    <RdRow title="Activity Details" button="Next" />
    <View style={{ marginLeft: 48, marginRight: 16 }}>
      <TextBox first label="Customer interest" value="" placeholder="Model 1" />
      <BasicButton title="+ Add" />
      <TextBox label="Estimate Date of Purchase" value="10/12/17" placeholder="" />
      <TextBox label="Source of Enquiry" value="Activity 1 12/10/17" placeholder="" />
      <TextBox label="Referred by" value="Dearler Sales Person" placeholder="" />
      <TextBox label="Influencer Name" value="Customer care" placeholder="" />
    </View>
  </View>
);

export default AddBasic11;
