import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import BackNav from '../../components/navigation/BackNav';
import InfoRow from '../../components/rows/infoRow';
import RdRow from '../../components/rows/rdRow';
import Dot from '../../components/Dot';

type P = {
  style?: any,
};

const BasicDetail = ({ style }: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column'}}>
    <BackNav title="John Doe" />
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: colors.goora  }}>
      <Dot size={24} style={{ marginRight: 12 }} selected />
      <Dot size={24} />
    </View>
    <RdRow title="Basic Details" button="EDIT" />
    <InfoRow first label="Name" value="John Doe" margin={48} />
    <InfoRow label="Phone Number" value="+91 9999999999" margin={48} />
    <InfoRow last label="Address" value="S/O 61/6A, Block 13A, Tehsil Haveli, District Pune, State Maharastra" margin={48} />
  </View>
);

export default BasicDetail;
