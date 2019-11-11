import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';

import Chip from './Chip';

import AppStyles from 'app/AppStyles';
import * as Colors from 'app/Colors';

const Chips = ({keywords, onSelectionChanged}) => {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    setSelected(keywords);
    onSelectionChanged(keywords);
  }, [keywords, onSelectionChanged]);

  const onSelectChanged = (keyword, isSelected) => {
    const selectedKeywords = [...selected];
    if (isSelected && !selectedKeywords.includes(keyword)) {
      const updated = [...selectedKeywords, keyword];
      setSelected(updated);
      onSelectionChanged(updated);
    }
    if (!isSelected && selectedKeywords.includes(keyword)) {
      const updated = selectedKeywords.filter(kw => kw !== keyword);
      setSelected(updated);
      onSelectionChanged(updated);
    }
  };

  return (
    <View style={[Styles.panel, AppStyles.panel]}>
      {keywords.map(kw => (
        <Chip
          key={kw}
          label={kw}
          selected={selected.includes(kw)}
          onSelectChanged={onSelectChanged}
        />
      ))}
    </View>
  );
};

Chips.propTypes = {
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelectionChanged: PropTypes.func.isRequired,
};

const Styles = StyleSheet.create({
  panel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderBottomColor: Colors.Border,
    borderBottomWidth: 1,
  },
});

export default Chips;
