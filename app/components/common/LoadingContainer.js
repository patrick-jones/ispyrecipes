import React from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, View} from 'react-native';

import AppStyles from 'app/AppStyles';

const LoadingContainer = ({loading, children}) =>
  loading ? (
    <View style={AppStyles.emptyState}>
      <ActivityIndicator
        size="large"
        testID="LoadingContainer_ActivityIndicator"
      />
    </View>
  ) : (
    <>{children}</>
  );

LoadingContainer.propTypes = {
  loading: PropTypes.bool,
};

LoadingContainer.defaultProps = {
  loading: false,
};

export default LoadingContainer;
