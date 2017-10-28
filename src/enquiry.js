/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { render, TextStyles, View, Image, Text } from 'react-sketchapp';
import designSystem, { colors, fonts } from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Devices from './components/Devices';
import Section from './components/Section';
import Agenda from './components/Agenda';
import PageNav from './components/navigation/PageNav';
import BackNav from './components/navigation/BackNav';
import BottomTabNav from './components/navigation/BottomTabNav';
import SaRow from './components/rows/saRow';
import TwoRow from './components/rows/twoRow';
import DateRow from './components/rows/dateRow';
import LdRow from './components/rows/ldRow';
import RdRow from './components/rows/rdRow';
import InfoRow from './components/rows/infoRow';
import TextBox from './components/forms/textBox';
import BasicButton from './components/forms/basicButton';
import BottomButton from './components/forms/bottomButton';
import ResultRow from './components/enquiry/resultRow';

const Document = ({ system }: { system: DesignSystem }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        KMW design for Enquiry Management Screens.
      </Label>
    </View>

    <Section title="Dashboard Screen with Tabs">
      <Devices>
        <PageNav title="Enquiry Manager" leftIcon="down-arrow.svg" />
        <View style={{flex: 1}}>
          <SaRow title="Current Editing" />
          <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" bcolor={colors.goora} />
          <SaRow title="Past Enquiries" />
          <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
        </View>
        <BottomTabNav />
      </Devices>
    </Section>

    <Section title="Dashboard Screen with Tabs">
      <Devices>
        <PageNav title="Enquiry Manager" leftIcon="down-arrow.svg" />
        <Agenda />
        <View style={{flex: 1}}>
          <DateRow date="23" day="Mon">
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
          <DateRow>
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
          <DateRow date="24" day="Tue">
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
        </View>
        <BottomTabNav title="Enquiry Manager" leftIcon="down-arrow.svg" />
      </Devices>
    </Section>


    <Section title="New Enquiry">
      <Devices>
        <BackNav title="New Enquiry" button="RESET" />
        <View style={{flex: 1}}>
          <LdRow title="Basic Customer Details" />
          <TextBox label="Full Name" first focus value="some |" />
          <TextBox label="Phone Number" last value="" placeholder="+91 __________" />
          <TextBox label="Address" value="" placeholder="S/O" />
          <TextBox value="" placeholder="Block" />
        </View>
        <BottomButton />
      </Devices>
    </Section>

    <View style={{ marginBottom: 2800}}>
    <Section title="New Enquiry Complete">
      <Devices overflow>
        <BackNav title="New Enquiry" button="RESET" />
        <LdRow title="Basic Customer Details" />
        <TextBox label="Full Name" first focus value="some |" />
        <TextBox label="Phone Number" last value="" placeholder="+91 __________" />
        <TextBox label="Address" value="" placeholder="S/O" />
        <TextBox value="" placeholder="Block" />
        <TextBox value="" placeholder="Tehsil" />
        <TextBox value="" placeholder="District" />
        <TextBox last value="" placeholder="State" />
        <TextBox label="Land owned" value="" placeholder="Irrigated Land (in acres)" />
        <TextBox last value="" placeholder="Non-Irrigated Land (in acres)" />
        <TextBox label="Crops grown" value="" placeholder="Add crop 1" />
        <BasicButton title="+ Add" />

        <LdRow title="Interest Details" />
        <TextBox first label="Customer interest" value="" placeholder="Model 1" />
        <BasicButton title="+ Add" />
        <TextBox label="Estimate Date of Purchase" value=" " placeholder="" focus />
        <TextBox label="Source of Enquiry" value=" " placeholder="" />
        <TextBox label="Referred by" value=" " placeholder="" />
        <TextBox label="Influencer Name" value=" " placeholder="" />

        <LdRow title="Review" />
        <RdRow title="Basic Details" button="CHANGE" />
        <InfoRow first label="Name" value="John Doe" />
        <InfoRow label="Phone Number" value="+91 9999999999" />
        <InfoRow last label="Address" value="S/O 61/6A, Block 13A, Tehsil Haveli, District Pune, State Maharastra" />

        <RdRow title="Interest Details" button="CHANGE" />
        <InfoRow first label="Product" value="Model 1" />
        <InfoRow label="ESTIMATE DATE OF ENQUIRY" value="12/12/2017" />
        <InfoRow label="Source of Enquiry" value="Activity 20/10/2017" />
        <InfoRow label="Referred by" value="Mr. Praful" />
        <InfoRow last label="Influencer Name" value="Mr. Praful" />

        <BottomButton label="SAVE" />
      </Devices>
    </Section>
    </View>

    <Section title="New Enquiry Review">
      <Devices>
        <BackNav title="New Enquiry" />
        <View style={{flex: 1}}>
          <LdRow title="Review" />
          <RdRow title="Basic Details" button="CHANGE" />
          <InfoRow first label="Name" value="John Doe" />
          <InfoRow label="Phone Number" value="+91 9999999999" />
          <InfoRow last label="Address" value="S/O 61/6A, Block 13A, Tehsil Haveli, District Pune, State Maharastra" />
        </View>
        <BottomButton label="SAVE" />
      </Devices>
    </Section>

    <Section title="Customer Enquiry Details Page">
      <Devices>
        <BackNav title="John Doe" />
        <View style={{flex: 1}}>
          <RdRow title="Basic Details" button="EDIT" />
          <InfoRow first label="Name" value="John Doe" />
          <InfoRow label="Phone Number" value="+91 9999999999" />
          <InfoRow last label="Address" value="S/O 61/6A, Block 13A, Tehsil Haveli, District Pune, State Maharastra" />
          <LdRow title="Enquiries" />
          <DateRow date="23" day="Mon">
            <ResultRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </DateRow>
        </View>
      </Devices>
    </Section>


  </View>
);

export default Document;


// <View style={{ marginBottom: 900}}>
// <Section title="Dashboard Screen without Tabs" style={{ marginBottom: 500}}>
//   <Devices overflow>
//     <PageNav title="Enquiry Manager" leftIcon="down-arrow.svg" />
//     <SaRow title="Current Editing" />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" bcolor={colors.goora} />
//     <SaRow title="Past Enquiries" />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" bcolor={colors.hot} />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Demo Planned" bcolor={colors.hot} />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Demo attended" bcolor={colors.hot} />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, CUE" bcolor={colors.hot} />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Warm Enquiry" bcolor={colors.warm} />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Cold Enquiry" bcolor={colors.cold} />
//     <TwoRow title="John Doe, Baramati" subtitle="Model X tractor, Sale" bcolor={colors.hirva} />
//   </Devices>
// </Section>
// </View>
