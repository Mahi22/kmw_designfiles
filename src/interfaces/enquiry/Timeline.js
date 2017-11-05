import React from "react";
import { View } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

import Agenda from '../../components/Agenda';
import DateRow from '../../components/rows/dateRow';
import ResultRow from '../../components/enquiry/resultRow';

import PageNav from '../../components/navigation/PageNav';
import BottomTabNav from '../../components/navigation/BottomTabNav';

import NoRow from '../../components/rows/noRow';

type P = {
  style?: any,
  result: boolean
};

const Timeline = ({ style, result = false }: P) => (
  <View style={{ ...style, flex: 1, flexDirection: 'column',backgroundColor: colors.goora}}>
    <PageNav title="Enquiry Manager" leftIcon="down-arrow.svg" />
    <View style={{flex: 1}}>
      {
        result ?
        <View>
          <Agenda />
          <DateRow date="23" day="Mon">
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
          <DateRow>
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
          <DateRow first last date="24" day="Tue">
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
        </View> :
        <NoRow title="No Enquiries added yet" />
      }
    </View>
    <View>
      { result ?
          <BottomTabNav /> :
          <BottomTabNav disabledLeft disabledRight />
      }
    </View>
  </View>
);

export default Timeline;
