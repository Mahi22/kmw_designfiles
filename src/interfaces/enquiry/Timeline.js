import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import Agenda from '../../components/Agenda';
import DateRow from '../../components/rows/dateRow';
import ResultRow from '../../components/enquiry/resultRow';

import PageNav from '../../components/navigation/PageNav';
import BottomTabNav from '../../components/navigation/BottomTabNav';

type P = {
  styles?: any,
};

const Timeline = ({ styles }: P) => (
  <View style={{ ...styles, flex: 1, flexDirection: 'column'}}>
    <PageNav title="Enquiry Manager" leftIcon="down-arrow.svg" />
    <Agenda />
    <View style={{flex: 1}}>
      <DateRow date="23" day="Mon">
        <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
      </DateRow>
      <DateRow>
        <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
      </DateRow>
      <DateRow first last date="24" day="Tue">
        <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
      </DateRow>
    </View>
    <BottomTabNav />
  </View>
);

export default Timeline;
