import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';
import SaRow from '../../components/rows/saRow';
import FlRow from '../../components/rows/flRow';
import TwoRow from '../../components/rows/twoRow';
import PageNav from '../../components/navigation/PageNav';
import BottomButton from '../../components/forms/bottomButton';
import BottomTabNav from '../../components/navigation/BottomTabNav';

export default Filter = (({styles}) => (
  <View>
    <PageNav title="Filter" leftIcon="down-arrow.svg" />
    <View style={{flex: 1}}>
      <FlRow title="filter" />
      <FlRow title="filter" />
    </View>
    <BottomButton label="Apply Filter" styles={{ }}/>
  </View>
)

);
