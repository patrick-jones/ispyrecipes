# ISpyRecipes

This is a small sample application that I wrote to explore React native development.
The app allows you to get recipe suggestions by snapping a 
photo of food with your camera. It is currently only built/tested under Android,
but in theory should run on iOS also.

Images are analyzed using Clarifai's [prediction API with their 'food' model](https://www.clarifai.com/models/food-image-recognition-model-bd367be194cf45149e75f01d59f77ba7).
Keywords extracted from Clarifai are then used to search [Spoonacular's recipe API](https://spoonacular.com/food-api).

The results from Clarifai sometimes are remarkably good, and other times are unintentionally hilarious. 

## Building the app

To build the application you will need to create a `.env` file in the project's
root directory with valid API keys for Clarifai and Spoonacular:

```
CLARIFAI=****************
SPOONACULAR=***************
```

To build a release you will need to add signing key properties to `~/.gradle/gradle.properties`:

```
ISPYRECIPES_KEYSTORE_FILE=ispyrecipes.keystore
ISPYRECIPES_KEY_ALIAS=ispyrecipes
ISPYRECIPES_STORE_PASSWORD=********
ISPYRECIPES_KEY_PASSWORD=*********
```
