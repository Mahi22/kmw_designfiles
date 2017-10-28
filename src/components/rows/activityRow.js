/* @flow */
import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';

type P = {
  margin: number,
  type: string,
  towns: any,
  members?: any
};
const ActivityRow = ({ margin, type, towns, members }: P) => (
  <View style={{
    flexDirection: 'row',
    backgroundColor: colors.pandra,
    marginLeft: margin ? margin : 0,
    marginRight: margin ? margin : 0,
    marginTop: 32,
    marginBottom: 32,
  }}>
    <View style={{flex: 2}}>
      <Text style={{ ...fonts['Title'] }}>{type}</Text>
      <Text style={{ ...fonts['Small'] }}>{towns.map((town, index) => towns.length - 1 === index ? town : `${town}, `)}</Text>
    </View>
    <View style={{flex: 1, flexDirection: 'column', marginLeft: 8, justifyContent: 'center' }}>
      <Text style={{ ...fonts['Micro'], color: colors.savla }}>
        Members
      </Text>
      <View style={{flexDirection: 'row'}}>
        {
          members.map(member => (
            <View style={{ flex: 1 }}>
              <Text style={{ ...fonts['Small'], color: colors.pandra, backgroundColor: colors.hirva, margin: 1, textAlign: 'center' }}>
                {member}
              </Text>
            </View>
          ))
        }
      </View>
    </View>
  </View>
);

export default ActivityRow;
