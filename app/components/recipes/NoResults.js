import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import AppStyles from 'app/AppStyles';

const NoResults = ({suggestion}) => (
  <View style={AppStyles.emptyState}>
    <Text style={AppStyles.title}>No matches</Text>
    <Text>{suggestion}</Text>
  </View>
);

NoResults.propTypes = {
  suggestion: PropTypes.string,
};

NoResults.defaultProps = {
  suggestion: 'Try changing the search term selections to get more results.',
};

export default NoResults;
