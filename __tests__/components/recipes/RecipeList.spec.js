jest.mock('app/spoonacular/api');
import React from 'react';
import {render} from '@testing-library/react-native';

import {spoonacular} from 'app/spoonacular';
import RecipeList from 'app/components/recipes/RecipeList';

describe('RecipeList', () => {
  it('should render', async () => {
    const recipes = await spoonacular.search(['foo', 'bar', 'baz']);
    const {baseElement} = render(
      <RecipeList recipes={recipes} onSelectRecipe={() => null} />,
    );
    expect(baseElement).not.toBeNull();
  });
});
