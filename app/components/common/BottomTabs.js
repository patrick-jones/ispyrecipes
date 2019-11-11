import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Colors from 'app/Colors';

const BottomTabs = ({navigation}) => {
  const {routeName} = navigation.state;
  const aboutStyles =
    routeName === 'About' ? [Styles.button, Styles.selected] : Styles.button;
  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.button}
        accessibilityHint="Return to camera screen"
        onPress={() => navigation.navigate('Camera')}>
        <Icon name="camera" style={Styles.text} />
        <Text style={Styles.text}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={aboutStyles}
        accessibilityHint="View about screen"
        onPress={() => navigation.navigate('About')}>
        <Icon name="info-circle" style={Styles.text} />
        <Text style={Styles.text}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.Border,
  },
  selected: {
    backgroundColor: Colors.LightBackground,
  },
  text: {
    color: Colors.DarkText,
    fontSize: 16,
  },
});

export default BottomTabs;
