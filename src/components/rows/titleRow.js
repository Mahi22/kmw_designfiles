/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  title: string,
};
const TitleRow = ({ title }: P) => (
  <View style={{ flexDirection: 'row', backgroundColor: colors.pandra }}>
    <Text style={{
      ...fonts['Title 2'],
      flex: 1,
      marginTop: 44,
      paddingBottom: 42,
      marginLeft: 48,
      marginRight: 48,
      borderBottomWidth: 2,
      borderColor: colors.goora
    }} >
      {title}
    </Text>
  </View>
);

export default TitleRow;
