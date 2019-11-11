import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, View} from 'react-native';

import RecipeListItem from './RecipeListItem';

import AppStyles from 'app/AppStyles';

const RecipeList = ({recipes, onSelectRecipe}) => (
  <View style={AppStyles.container}>
    <FlatList
      data={recipes}
      keyExtractor={item => `${item.id}`}
      renderItem={({item, index}) => (
        <RecipeListItem
          recipe={item}
          isOdd={index % 2 == 1}
          onSelectRecipe={onSelectRecipe}
        />
      )}
    />
  </View>
);

RecipeList.propTypes = {
  onSelectRecipe: PropTypes.func.isRequired,
  recipes: PropTypes.arrayOf(PropTypes.shape()),
};

RecipeList.defaultProps = {
  recipes: [],
};

export default RecipeList;
