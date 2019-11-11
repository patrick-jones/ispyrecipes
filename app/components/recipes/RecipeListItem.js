import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {RecipeSummary} from 'app/spoonacular/shapes';

const RecipeListItem = ({recipe, onSelectRecipe, isOdd}) => {
  return (
    <View style={isOdd ? Styles.item1 : Styles.item0}>
      <Image
        source={{uri: recipe.image}}
        resizeMode="cover"
        style={Styles.listImage}
      />
      <TouchableOpacity
        style={Styles.listText}
        onPress={() => onSelectRecipe(recipe.id)}
        accessibilityHint="View recipe details"
        testID={`RecipeListItem-${recipe.id}`}>
        <Text style={Styles.title}>{recipe.title}</Text>
        <Text style={Styles.subtitle}>Serves {recipe.servings}</Text>
      </TouchableOpacity>
    </View>
  );
};

RecipeListItem.propTypes = {
  recipe: PropTypes.shape(RecipeSummary).isRequired,
  onSelectRecipe: PropTypes.func.isRequired,
  isOdd: PropTypes.bool,
};

RecipeListItem.defaultProps = {
  isOdd: false,
};

const Styles = StyleSheet.create({
  item0: {
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  item1: {
    flexDirection: 'row',
    backgroundColor: '#f3f3f7',
  },
  listImage: {
    height: undefined,
    width: undefined,
    flex: 1,
  },
  listText: {
    flex: 4,
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#808080',
  },
});

export default RecipeListItem;
