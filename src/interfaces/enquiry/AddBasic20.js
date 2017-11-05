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

const AddBasic20 = ({ style}: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column'}}>
    <BackNav title="New Enquiry" />
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: colors.goora  }}>
      <Dot size={24} style={{ marginRight: 12 }} />
      <Dot size={24} style={{ marginRight: 12 }} />
      <Dot size={24} selected />
    </View>
    <RdRow title="Review" button="Save" />
    <View style={{ marginLeft: 48, marginRight: 16 }}>
      <TextBox first label="Name" value="John Doe" />
      <TextBox label="Phone Number" value="+91 9999999999" />
      <TextBox last overflow label="Address" value="S/O 61/6A, Block 13A, Tehsil Haveli, District Pune, State Maharastra" />
      <TextBox first label="Customer interest" value="" placeholder="Model 1" />
      <TextBox label="Estimate Date of Purchase" value="10/12/17" placeholder="" />
      <TextBox label="Source of Enquiry" value="Activity 1 12/10/17" placeholder="" />
      <TextBox label="Referred by" value="Dearler Sales Person" placeholder="" />
      <TextBox label="Influencer Name" value="Customer care" placeholder="" />
    </View>
  </View>
);

export default AddBasic20;
