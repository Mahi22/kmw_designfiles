/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';
import TextBox from '../forms/textBox';

type P = {
  title: string,
  button: string,
  focus: boolean
};
const SearchNav = ({ title, button, focus }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra, paddingTop: 4, paddingBottom: 4, borderColor: focus ? colors.kala : colors.goora, borderBottomWidth: 2 }}>
    <View style={{ width: 24, borderWidth: 1, borderColor: colors.cold, height: 24, marginLeft: 8, marginRight: 0, marginTop: 28}} />
    <View style={{ flex: 1, marginLeft: 4, marginRight: 4 }}>
      <TextBox value="" placeholder="Search" margin={16} />
    </View>
    {
      button ?
      <Text style={{
        ...fonts['Small'],
        marginRight: 8,
        marginTop: 32,
        color: colors['hirva']
      }}>
        {button}
      </Text> :
      null
    }
  </View>
);

export default SearchNav;
