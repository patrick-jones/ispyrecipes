jest.mock('app/spoonacular/api');
import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {spoonacular} from 'app/spoonacular';
import RecipeListItem from 'app/components/recipes/RecipeListItem';

describe('RecipeListItem', () => {
  it('Should render', async () => {
    const recipes = await spoonacular.search(['foo', 'bar', 'baz']);
    const {getByText} = render(
      <RecipeListItem recipe={recipes[0]} onSelectRecipe={() => null} />,
    );
    const title = getByText(recipes[0].title);
    expect(title).not.toBeNull();
  });

  it('Should handle presses', async () => {
    const recipes = await spoonacular.search(['foo', 'bar', 'baz']);
    const recipe = recipes[0];
    const handlePress = jest.fn();
    const {getByTestId} = render(
      <RecipeListItem recipe={recipe} onSelectRecipe={handlePress} />,
    );
    const pressable = getByTestId(`RecipeListItem-${recipe.id}`);
    fireEvent.press(pressable);

    expect(handlePress).toHaveBeenCalledTimes(1);
    expect(handlePress).toHaveBeenCalledWith(recipe.id);
  });
});
