import React from 'react';
import PropTypes from 'prop-types';
import {ScrollView, Text, View} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';

import {RecipeShapes} from 'app/spoonacular';
import RecipeSection from './RecipeSection';
import AppStyles from 'app/AppStyles';

const Recipe = ({recipe}) => (
  <ScrollView style={AppStyles.container}>
    <FullWidthImage
      source={{uri: recipe.image}}
      ratio={3 / 4}
      resizeMode="cover"
    />
    <View style={AppStyles.content}>
      <Text style={AppStyles.h1}>{recipe.title}</Text>
      <Text style={AppStyles.subtitle}>
        Ready in {recipe.readyInMinutes} minutes
      </Text>
      <Text style={AppStyles.subtitle}>Serves: {recipe.servings}</Text>
      <Text style={AppStyles.h2}>Instructions</Text>
      {recipe.instructions.map(section => (
        <RecipeSection key={section.name} section={section} />
      ))}
    </View>
  </ScrollView>
);

Recipe.propTypes = {
  recipe: PropTypes.shape(RecipeShapes.Recipe).isRequired,
};

export default Recipe;
