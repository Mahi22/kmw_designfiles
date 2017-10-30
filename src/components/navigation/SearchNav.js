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
    <View style={{ flex: 1 }}>
      <TextBox value="" placeholder="Search" icon margin={16} />
    </View>
    {
      button ?
      <Text style={{
        ...fonts['Small'],
        marginRight: 16,
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
