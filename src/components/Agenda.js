/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../designSystem';

type P = {
  title: string,
  children?: any,
};
const Agenda = ({ title, children }: P) => (
  <View>
    <View style={{ paddingBottom: 16, paddingTop: 16, flexDirection: 'row', marginLeft: 16, marginRight: 16 }}>
      <View style={{ flex:1 }}>
        <Text  style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Sun</Text>
        <Text  style={{ ...fonts['Small'], textAlign: 'center', color: colors.kala}}>22</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.cold}}>Mon</Text>
        <View style={{ backgroundColor: colors.cold, paddingBottom: 2, borderRadius: '50%' }}>
          <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.pandra}}>23</Text>
          <Text style={{ fontSize: 24, lineHeight: 4, textAlign: 'center', color: colors.pandra}}>.</Text>
        </View>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Tue</Text>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.kala}}>24</Text>
        <Text style={{ fontSize: 24, lineHeight: 4, textAlign: 'center', color: colors.cold}}>.</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Wen</Text>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.kala}}>25</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Thu</Text>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.kala}}>26</Text>
        <Text style={{ fontSize: 24, lineHeight: 4, textAlign: 'center', color: colors.cold}}>.</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Fri</Text>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.kala}}>27</Text>
        <Text style={{ fontSize: 24, lineHeight: 4, textAlign: 'center', color: colors.cold}}>.</Text>
      </View>
      <View style={{ flex:1 }}>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.savla}}>Sat</Text>
        <Text style={{ ...fonts['Small'], textAlign: 'center', color: colors.kala}}>28</Text>
      </View>
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 8, paddingBottom: 8 }}>
      <View style={{ width: 48, height: 8, borderRadius: 4, backgroundColor: colors.pandra}}/>
    </View>
  </View>
);

export default Agenda;
