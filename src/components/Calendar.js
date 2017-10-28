/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

type P = {
  selected: string,
  children?: any,
};

type PD = {
  dates: any,
  current: number,
  selected: any
}

const Daterow = ({ dates, current, selected }: PD) => (
  <View style={{ paddingBottom: 8, paddingTop: 8, flexDirection: 'row', marginLeft: 16, marginRight: 16 }}>
    {
      dates.map( date => (
        current.indexOf(date) === -1 ?
        <View style={{ flex:1, backgroundColor: selected === date ? colors.cold : 'inherit', paddingBottom: 2    }}>
          <Text style={{ ...fonts['Small'], textAlign: 'center', color: selected === date ? colors.pandra : colors.kala}}>{date}</Text>
        </View> :
        <View style={{ flex:1, backgroundColor: selected === date ? colors.cold : 'inherit', paddingBottom: 2    }}>
          <Text style={{ ...fonts['Small'], textAlign: 'center', color: selected === date ? colors.pandra : colors.kala}}>{date}</Text>
          <Text style={{ fontSize: 24, lineHeight: 4, textAlign: 'center', color: selected === date ? colors.pandra : colors.cold}}>.</Text>
        </View>
      ))
    }
  </View>
);

const Calendar = ({ selected, children }: P) => (
  <View>
    <Text style={{ ...fonts['Large'] ,textAlign: 'center', marginTop: 8}}>
      October 2017
    </Text>
    <View style={{ paddingBottom: 8, paddingTop: 16, flexDirection: 'row', marginLeft: 16, marginRight: 16 }}>
      <View style={{ flex:1 }}>
        <Text  style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Sun</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.cold}}>Mon</Text>
        <View style={{ backgroundColor: colors.cold, paddingBottom: 2, borderRadius: '50%' }}>
        </View>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Tue</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Wen</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Thu</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Fri</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Sat</Text>
      </View>
    </View>
    <Daterow dates={['1', '2', '3', '4', '5', '6', '7']} selected={selected} current={['2', '3', '5']} />
    <Daterow dates={['8', '9', '10', '11', '12', '13', '14']} selected={selected} current={['9', '11', '13']} />
    <Daterow dates={['15', '16', '17', '18', '19', '20', '21']} selected={selected} current={['16', '17', '18', '20']} />
    <Daterow dates={['22', '23', '24', '25', '26', '27', '28']} selected={selected} current={[]} />
    <Daterow dates={['29', '30', '31', ' ', ' ', ' ', ' ']} selected={selected} current={[]} />
  </View>
);

export default Calendar;
