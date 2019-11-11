import axios from 'axios';
import {SPOONACULAR as apiKey} from 'react-native-dotenv';

import {
  transformListResponse,
  transformRecipeResponse,
} from './transformResponse';

// quick and dirty caching, only last for single run
// save my api quotas!
const searchCache = {};
const recipeCache = {};

export async function search(keywords) {
  const query = keywords.map(s => (s.includes(' ') ? `"${s}"` : s)).join(' ');
  if (!searchCache[query]) {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/search',
      {
        params: {
          apiKey,
          query,
        },
      },
    );
    searchCache[query] = transformListResponse(response.data);
  }

  return searchCache[query] || [];
}

export async function getRecipe(recipeId) {
  if (!recipeCache[recipeId]) {
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information`,
      {
        params: {
          apiKey,
        },
      },
    );
    recipeCache[recipeId] = transformRecipeResponse(response.data);
  }

  return recipeCache[recipeId];
}
