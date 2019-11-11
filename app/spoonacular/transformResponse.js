// Transforms a search response from Spoonacular into a format that is easier to deal with
export function transformListResponse(responseData) {
  const {baseUri, results} = responseData;

  return results.map(result => ({
    ...result,
    image: `${baseUri}${result.image}`,
    imageUrls: (result.imageUrls || []).map(image => `${baseUri}${image}`),
  }));
}

// Transforms a recipe response from Spoonacular into a format that is easier to deal with
export function transformRecipeResponse(responseData) {
  const {analyzedInstructions} = responseData;
  // this is kind of a weird structure that is not documented well
  // appears to be an array of titled sections of steps
  const instructions = (analyzedInstructions || []).map(section => ({
    name: section.name || '',
    steps: (section.steps || []),
  }));
  return {
    ...responseData,
    dishTypes: responseData.dishTypes || [],
    instructions,
  };
}
