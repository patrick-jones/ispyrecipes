import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';

import {spoonacular} from 'app/spoonacular';
import {BottomTabs, LoadingContainer} from 'app/components/common';
import Recipe from './Recipe';

import AppStyles from 'app/AppStyles';

async function loadRecipe(recipeId, setState) {
  setState({loading: true, recipe: null});
  try {
    const recipe = await spoonacular.getRecipe(recipeId);
    setState({
      recipe,
      loading: false,
    });
  } catch (error) {
    console.error(error);
  }
}

const RecipeScreen = ({navigation}) => {
  const recipeId = navigation.getParam('recipeId');
  const [state, setState] = useState({loading: true, recipe: null});
  useEffect(() => {
    loadRecipe(recipeId, setState);
  }, [recipeId]);

  const {recipe, loading} = state;
  return (
    <SafeAreaView style={AppStyles.container}>
      <LoadingContainer loading={loading}>
        {recipe && <Recipe recipe={recipe} />}
      </LoadingContainer>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

RecipeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

RecipeScreen.navigationOptions = {
  title: 'Recipe Details',
};

export default RecipeScreen;
