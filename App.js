import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {CameraScreen} from 'app/components/camera';
import {AboutScreen} from 'app/components/common';
import {RecipeListScreen, RecipeScreen} from 'app/components/recipes';

const AppNavigator = createStackNavigator({
  Camera: {screen: CameraScreen},
  RecipeList: {screen: RecipeListScreen},
  Recipe: {screen: RecipeScreen},
  About: {screen: AboutScreen},
});

export default createAppContainer(AppNavigator);
