import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import {RecipeShapes} from 'app/spoonacular';

const RecipeSection = ({section}) => (
  <View>
    {section.name ? <Text>{section.name}</Text> : null}
    {section.steps.map(step => (
      <View key={step.number} style={{flexDirection: 'row'}}>
        <Text>{'\u2022'}</Text>
        <Text style={{flex: 1, paddingLeft: 5}}>{step.step}</Text>
      </View>
    ))}
  </View>
);

RecipeSection.propTypes = {
  section: PropTypes.shape(RecipeShapes.Section).isRequired,
};

export default RecipeSection;
