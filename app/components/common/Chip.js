import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as Colors from 'app/Colors';

const Chip = ({label, selected, onSelectChanged}) => {
  const icon = selected ? 'check-circle' : 'circle-thin';
  const style = selected ? selectedStyle : deselectedStyle;
  return (
    <TouchableOpacity
      style={[commonStyle.chip, style.chip]}
      onPress={() => onSelectChanged(label, !selected)}>
      <Icon
        name={icon}
        style={[commonStyle.icon, style.icon]}
        onPress={() => onSelectChanged(label, !selected)}
      />
      <Text
        style={[commonStyle.label, style.label]}
        selectable={false}
        onPress={() => onSelectChanged(label, !selected)}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onSelectChanged: PropTypes.func.isRequired,
};

const commonStyle = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 24,
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
  },
  label: {
    marginLeft: 5,
    fontSize: 20,
  },
});

const selectedStyle = StyleSheet.create({
  chip: {
    borderColor: Colors.Brand,
  },
  icon: {
    color: Colors.Brand,
  },
  label: {
    color: Colors.Brand,
  },
});

const deselectedStyle = StyleSheet.create({
  chip: {
    borderColor: Colors.LightText,
  },
  icon: {
    color: Colors.LightText,
  },
  label: {
    color: Colors.LightText,
  },
});

export default Chip;
