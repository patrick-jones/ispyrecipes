import React from 'react';
import {Linking, Text} from 'react-native';

import AppStyles from 'app/AppStyles';

const Link = ({href, children}) => (
  <Text onPress={() => Linking.openURL(href)} style={AppStyles.link}>
    {children}
  </Text>
);

export default Link;
