import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import BackNav from '../../components/navigation/BackNav';
import InfoRow from '../../components/rows/infoRow';
import RdRow from '../../components/rows/rdRow';
import Row from '../../components/rows/Row';
import Dot from '../../components/Dot';

import TextBox from '../../components/forms/textBox';

type P = {
  style?: any,
};

const AddBasic0 = ({ style}: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column'}}>
    <BackNav title="New Enquiry" />
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: colors.goora  }}>
      <Dot size={24} style={{ marginRight: 12 }} selected />
      <Dot size={24} />
    </View>
    <RdRow title="Basic Details" button="Next" disabled />
    <View style={{ marginLeft: 48, marginRight: 16 }}>
      <TextBox first label="Name" value="John Doe" />
      <TextBox label="Phone Number" value="+91 9999999999" focus />
      <TextBox last overflow label="Address" value=" " />
    </View>
  </View>
);

export default AddBasic0;
