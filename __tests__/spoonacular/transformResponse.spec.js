import {
  transformListResponse,
  transformRecipeResponse,
} from 'app/spoonacular/transformResponse';
import listing from 'app/spoonacular/__mocks__/spoonacular-listing';
import single from 'app/spoonacular/__mocks__/spoonacular-recipe';

describe('Functions for transforming spoonacular responses', () => {
  it('Correctly processes search response data', () => {
    const recipes = transformListResponse(listing);
    expect(recipes).toHaveLength(9);
    expect(recipes[0].id).toBe(779351);
    expect(recipes[0].image).toBe(
      'https://spoonacular.com/recipeImages/red-white-and-blue-fruit-salad-779351.jpg',
    );
    expect(recipes[8].id).toBe(876469);
    expect(recipes[8].image).toBe(
      'https://spoonacular.com/recipeImages/honey-pineapple-rainbow-fruit-salad-876469.jpg',
    );
  });

  it('Correctly processes recipe response data', () => {
    const recipe = transformRecipeResponse(single);
    expect(recipe).not.toBeNull();
    expect(recipe.id).toBe(876469);
    expect(recipe.title).toBe('Honey Pineapple Rainbow Fruit Salad');
    expect(recipe.dishTypes).toHaveLength(8);
    expect(recipe.instructions).toHaveLength(1);
    expect(recipe.instructions[0].steps).toHaveLength(3);
    expect(recipe.instructions[0].steps[0].step).toBe(
      'In a mixing bowl, whisk together the pineapple juice, honey, lime juice and freshly chopped mint.',
    );
    expect(recipe.instructions[0].steps[1].step).toBe(
      'Add all of the fruit to the mixing bowl, and gently toss together until the the dressing coats all of the fruit nicely.',
    );
    expect(recipe.instructions[0].steps[2].step).toBe('Serve immediately.');
  });
});
