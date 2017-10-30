import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';
import TextBox from '../../components/forms/textBox';
const NavBar = () => (
  <View style={{borderBottomWidth: 2, flexDirection: 'row', justifyContent: 'space-around',
    alignItems: 'center', borderColor:'#f5f7fa', height: 128, backgroundColor: '#FFF',}}>
    <View style={{ width: 48, borderWidth: 1, borderColor: colors.cold, height: 48}}></View>
    <Text style={{
      ...fonts['Title 4']
    }} >
      Search
    </Text>
    <View>
    <TextBox focus value="Search" />

    </View>

  </View>
);

export default NavBar;
