import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';
import SaRow from '../../components/rows/saRow';
import FlRow from '../../components/rows/flRow';
import RdRow from '../../components/rows/rdRow';
import TwoRow from '../../components/rows/twoRow';
import BackNav from '../../components/navigation/BackNav';
import BottomButton from '../../components/forms/bottomButton';
import BottomTabNav from '../../components/navigation/BottomTabNav';

const Filter = (({styles}) => (
  <View style={{ ...styles, flex: 1, flexDirection: 'column'}}>
    <BackNav title="Filter" leftIcon="down-arrow.svg" />
    <View style={{flex: 1, flexDirection: 'column'}}>
      <RdRow title="Show Enquiries" button="ALL" />
      <FlRow title="Hot"></FlRow>
      <FlRow title="Warm"></FlRow>
      <FlRow title="Cold"></FlRow>
      <RdRow title="Activity Type" button="ALL" />
      <FlRow title="Campaign Van"></FlRow>
      <FlRow title="Customer Care"></FlRow>
      <FlRow title="Exhibition"></FlRow>
      <RdRow title="Retail Finance" button="ALL" />
      <FlRow title="Bank Finance"></FlRow>
      <FlRow title="Privaate Finance"></FlRow>
      <FlRow title="Government Scheme"></FlRow>
      <RdRow title="Members Involved" button="ALL" />
      <FlRow title="Member 1"></FlRow>
      <FlRow title="Member 2"></FlRow>
    </View>
    <BottomButton label="Apply Filter" />
  </View>
));

export default Filter;
