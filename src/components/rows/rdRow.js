/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
  button: string,
  disabled: boolean
};
const RdRow = ({ title, button, disabled }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra, paddingTop: 32, opacity: disabled ? 0.5 : 1 }}>
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
        opacity: disabled ? 0.5 : 1
      }}>
        {button}
      </Text> :
      null
    }
  </View>
);

export default RdRow;
