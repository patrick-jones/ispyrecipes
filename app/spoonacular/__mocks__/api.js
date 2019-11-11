import {
  transformListResponse,
  transformRecipeResponse,
} from '../transformResponse';
import listing from './spoonacular-listing';
import single from './spoonacular-recipe';

export async function search(keywords) {
  return Promise.resolve(transformListResponse(listing));
}

export async function getRecipe(recipeId) {
  return Promise.resolve(transformRecipeResponse(single));
}
