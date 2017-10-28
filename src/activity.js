/* @flow */
/* eslint-disable react/jsx-filename-extension, import/no-named-as-default-member */

import React from 'react';
import { View, Image, Text } from 'react-sketchapp';
import { colors, fonts } from './designSystem';
import type { DesignSystem } from './designSystem';

import Label from './components/Label';
import Cell from './components/Cell';
import Devices from './components/Devices';
import Section from './components/Section';
import Calendar from './components/Calendar';
import PageNav from './components/navigation/PageNav';
import BottomTabNav from './components/navigation/BottomTabNav';
import Row from './components/rows/Row';
import ActivityRow from './components/rows/ActivityRow';
import LdRow from './components/rows/ldRow';
import TextBox from './components/forms/textBox';
import BackNav from './components/navigation/BackNav';
import BottomButton from './components/forms/bottomButton';
import BasicButton from './components/forms/basicButton';
import RdRow from './components/rows/rdRow';
import Dot from './components/Dot';
import ResultRow from './components/enquiry/resultRow';
import SearchNav from './components/navigation/SearchNav';

const Document = ({ system }: { system: DesignSystem }) => (
  <View>
    <View name="Intro" style={{ width: 420, marginBottom: system.spacing * 4 }}>
      <Label>
        KMW design for Activity Management Screens.
      </Label>
    </View>

    <Section title="Dashboard Screen with Tabs">
      <Devices>
        <PageNav title="Activity Manager" leftIcon="down-arrow.svg" />
        <View style={{flex: 1}}>
          <Calendar selected="23" />
        </View>
        <BottomTabNav />
      </Devices>
    </Section>

    <Section title="Dashboard Screen with Tabs">
      <Devices>
        <PageNav title="Activity Manager" leftIcon="down-arrow.svg" />
        <View style={{flex: 1}}>
          <Calendar selected="30"/>

          <Row first>
            <ActivityRow margin={12} type="Campaign Van" towns={["Shirur", "Shikrapur", "Sharur", "Sharir", "Shamin", "Shahim"]} members={['A', 'B', 'C']} />
          </Row>


        </View>
        <BottomTabNav />
      </Devices>
    </Section>

    <Section title="Dashboard Screen with Tabs">
      <Devices>
        <PageNav title="Activity Manager" leftIcon="down-arrow.svg" />
        <View style={{flex: 1}}>
          <Calendar selected="16"/>

          <Row first>
            <ActivityRow margin={12} type="Campaign Van" towns={["Shirur", "Shikrapur", "Sharur", "Sharir", "Shamin", "Shahim"]} members={['MM', 'AS', 'KP']} />
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, paddingBottom: 8}}>
              <Cell label="HOT" value="12" />
              <Cell label="Warm" value="14" />
              <Cell label="Cold" value="3" last />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 16, paddingRight: 16}}>
              <Cell label="Demo" value="18" />
              <Cell label="CUE" value="9" last />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 16, paddingRight: 16}}>
              <Cell label="Reatil Finance" value="3" />
              <Cell label="Sale" value="4" last />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingLeft: 16, paddingRight: 16, paddingBottom: 24}}>
              <Cell label="Sale Feedback" value="2" />
              <Cell label="Non Sale Feedback" value="18" last />
            </View>
          </Row>


        </View>
        <BottomTabNav />
      </Devices>
    </Section>

    <Section title="New Activity">
      <Devices>
        <BackNav title="New Activity" button="RESET" />
        <View style={{flex: 1, backgroundColor: colors.pandra}}>
          <TextBox label="Activity type" first focus value="Campaign Van" />
          <TextBox label="Date" last value="23/10/2017" placeholder="" />
          <TextBox label="Location" value="" placeholder="eg: Chandanki Chowk, Pune" />
          <BasicButton title="+ Add" />
          <TextBox label="Members" first placeholder="Staff Member" />
          <TextBox placeholder="Staff Member" />
          <BasicButton title="+ Add" />
        </View>
        <BottomButton label="Save" disabled />
      </Devices>
    </Section>

    <View style={{ marginBottom: 660}}>
      <Section title="New Activity">
        <Devices overflow>
          <BackNav title="New Activity" button="RESET" />
          <TextBox label="Activity type" first value="Campaign Van" />
          <TextBox label="Date" last value="23/10/2017" placeholder="" />
          <TextBox label="Location" value="Chandanki Chowk, Pune" />
          <TextBox label="Location" value="Dange Chowk, Pune" />
          <BasicButton title="+ Add" />
          <TextBox label="Members" first value="Praful G" />
          <TextBox value="Mahesh M" />
          <TextBox last value="Amit S" />
          <BasicButton title="+ Add" />
          <BottomButton label="Save" />
        </Devices>
      </Section>
    </View>


    <View style={{ marginBottom: 600 }}>
      <Section title="Activity Details 1">
        <Devices overflow>
          <BackNav title="Campaign Van" button="12/10/17" />
          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12  }}>
            <Dot size={24} style={{ marginRight: 12 }} selected />
            <Dot size={24} />
          </View>
          <RdRow title="Activity Details" button="EDIT" />
          <TextBox label="Activity type" first value="Campaign Van" />
          <TextBox label="Date" last value="23/10/2017" placeholder="" />
          <TextBox label="Location" value="Chandanki Chowk, Pune" />
          <TextBox label="Location" value="Dange Chowk, Pune" />
          <TextBox label="Members" first value="Praful G" />
          <TextBox value="Mahesh M" />
          <TextBox last value="Amit S" />
        </Devices>
      </Section>
    </View>

    <Section title="Activity Details 2">
      <Devices overflow>
        <BackNav title="Campaign Van" button="12/10/17" />
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12  }}>
          <Dot size={24} style={{ marginRight: 12 }} />
          <Dot size={24} selected />
        </View>
        <View style={{ flex: 1 }}>
          <RdRow title="Enquiries" button="ADD" />
          <Row>
            <ResultRow style={{ paddingLeft: 12, paddingRight: 16, paddingTop: 32, paddingBottom: 24 }} first title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
          </Row>
        </View>
        <BottomTabNav middle=" " />
      </Devices>
    </Section>

    <Section title="Search">
      <Devices overflow>
        <SearchNav title="Campaign Van" button="Cancel" />
        <Text style={{ ...fonts['Large'], marginLeft: 16, marginRight: 16, marginTop: 32, marginBottom: 16, paddingLeft: 12, borderBottomWidth: 2, borderColor: colors.savla,  }}>
          Recent Searches
        </Text>
        <Row>
          <ResultRow
            style={{ paddingLeft: 12, paddingRight: 16, paddingTop: 32, paddingBottom: 24 }}
            title="John Doe, Baramati"
            subtitle="Model X tractor, Hot Enquiry"
            status={['HOT']} />
        </Row>
        <Row>
          <ResultRow style={{ paddingLeft: 12, paddingRight: 16, paddingTop: 32, paddingBottom: 24 }} first title="John Doe, Baramati" subtitle="Model X tractor, Hot Enquiry" />
        </Row>
      </Devices>
    </Section>

    <Section title="New Activity DEMO">
      <Devices>
        <BackNav title="New Activity" button="RESET" />
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 12, paddingBottom: 12  }}>
          <Dot size={24} style={{ marginRight: 12 }} selected />
          <Dot size={24} />
        </View>
        <View style={{flex: 1, backgroundColor: colors.pandra}}>
          <TextBox label="Activity type" first focus value="DEMO" />
          <TextBox label="Date" last value="23/10/2017" placeholder="" />
          <TextBox label="Location" value="" placeholder="eg: Chandanki Chowk, Pune" />
          <BasicButton title="+ Add" />
          <TextBox label="Members" first placeholder="Staff Member" />
          <TextBox placeholder="Staff Member" />
          <BasicButton title="+ Add" />
        </View>
        <BottomButton label="Save" disabled />
      </Devices>
    </Section>


  </View>
);

export default Document;

// export default () => {
//   TextStyles.create(
//     {
//       context,
//       clearExistingStyles: true,
//     },
//     designSystem.fonts
//   );
//
//   render(<Document system={designSystem} />, context.document.currentPage());
// };


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
//
//
// <Text style={{
//   ...fonts['Title 3'],
//   textAlign: 'center',
//   color: colors.cold,
//   marginTop: 8,
//   marginBottom: 8,
//   marginRight: 16,
//   marginLeft: 16,
//   paddingTop: 12,
//   paddingBottom: 12,
//   borderColor: colors.cold,
//   borderWidth: 2
// }}>
//   ADD
// </Text>
