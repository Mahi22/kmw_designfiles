import React from 'react';
import { View, Text } from 'react-sketchapp';
import { colors, fonts } from '../../designSystem';
import SearchNav from '../../components/navigation/SearchNav';
import Row from '../../components/rows/Row';
import ResultRow from '../../components/enquiry/resultRow';

export default Search = (props) => (
  <View style={{ ...styles, flex: 1, flexDirection: 'column'}}>
    <SearchNav title="Campaign Van" button="Cancel" />
    <Text style={{ ...fonts['Large'], marginLeft: 16, marginRight: 16, marginTop: 32, marginBottom: 16, paddingLeft: 12, borderBottomWidth: 2, borderColor: colors.savla,  }}>
      Recent Searches
    </Text>
    <Row>
      <ResultRow
        title="Sharad P, Baramati"
        subtitle="Model X tractor, Hot Enquiry"
        status={['HOT']} />
    </Row>
    <Row>
      <ResultRow title="Narendra M, Shikrapur" subtitle="Model X tractor, Hot Enquiry" />
    </Row>
  </View>
);
