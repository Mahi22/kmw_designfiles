/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  button: string
};
const BackNav = ({ title, button }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra, paddingTop: 32, paddingBottom: 22, borderColor: colors.goora, borderBottomWidth: 2 }}>
    <View style={{ width: 24, borderWidth: 1, borderColor: colors.cold, height: 24, marginLeft: 16, marginRight: 8, marginTop: 2}} />
    <Text style={{
      ...fonts['Title 4'],
      flex: 1
    }} >
      {title}
    </Text>
    {
      button ?
      <Text style={{
        ...fonts['Small'],
        marginRight: 16,
        marginTop: 6,
        color: colors['hirva']
      }}>
        {button}
      </Text> :
      null
    }
  </View>
);

export default BackNav;
