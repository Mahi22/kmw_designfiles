/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  button: string
};
const RdRow = ({ title, button }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra, paddingTop: 32 }}>
    <Text style={{
      ...fonts['Title 4'],
      flex: 1,
      marginLeft: 48,
      borderColor: colors.goora,
      borderBottomWidth: 2,
      paddingBottom: 24
    }} >
      {title}
    </Text>
    {
      button ?
      <Text style={{
        ...fonts['Small'],
        marginRight: 16,
        marginTop: 6,
        color: colors['hirva'],
      }}>
        {button}
      </Text> :
      null
    }
  </View>
);

export default RdRow;
