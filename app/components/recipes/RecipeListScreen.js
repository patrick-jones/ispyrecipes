import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';

import {spoonacular} from 'app/spoonacular';
import {LoadingContainer} from 'app/components/common';
import {BottomTabs, Chips} from 'app/components/common';

import NoResults from './NoResults';
import RecipeList from './RecipeList';

import AppStyles from 'app/AppStyles';

class RecipeListScreen extends Component {
  static navigationOptions = {
    title: 'Suggested Recipes',
  };

  state = {
    recipes: [],
    loading: true,
    selectedKeywords: [],
  };

  loadRecipes = async selectedKeywords => {
    if (selectedKeywords.length) {
      const recipes = await spoonacular.search(selectedKeywords);
      this.setState({recipes, selectedKeywords, loading: false});
    } else {
      this.setState({recipes: [], selectedKeywords, loading: false});
    }
  };

  handleSelectRecipe = async recipeId => {
    const {navigation} = this.props;
    navigation.navigate('Recipe', {recipeId});
  };

  renderContents = (recipes, loading, selectedKeywords) => {
    if (!loading && !recipes.length) {
      const suggestion = selectedKeywords.length
        ? 'Try removing some search terms to get more results'
        : 'Select at least one search term';
      return <NoResults suggestion={suggestion} />;
    }
    return (
      <RecipeList recipes={recipes} onSelectRecipe={this.handleSelectRecipe} />
    );
  };

  render() {
    const {navigation} = this.props;
    const {recipes, selectedKeywords, loading} = this.state;
    const keywords = navigation.getParam('keywords');
    return (
      <SafeAreaView style={AppStyles.container}>
        <Chips keywords={keywords} onSelectionChanged={this.loadRecipes} />
        <LoadingContainer loading={loading}>
          {this.renderContents(recipes, loading, selectedKeywords)}
        </LoadingContainer>
        <BottomTabs navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default RecipeListScreen;
