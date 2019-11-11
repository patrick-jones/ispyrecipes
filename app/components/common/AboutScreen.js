import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';

import BottomTabs from './BottomTabs';
import Link from './Link';

import AppStyles from 'app/AppStyles';

const AboutScreen = ({navigation}) => (
  <SafeAreaView style={AppStyles.container}>
    <ScrollView style={AppStyles.container}>
      <View style={AppStyles.content}>
        <Text style={[AppStyles.h1, AppStyles.contentHeading]}>About</Text>
        <Text>
          <Text style={[AppStyles.bold, AppStyles.italic]}>
            Snap a photo of food, get recipe suggestions.{' '}
          </Text>
          That's the simple premise of this app. Sometimes it works surprisingly
          well, and other times it is hilariously wrong.
        </Text>
        <Text style={[AppStyles.h2, AppStyles.contentHeading]}>
          Third Party Services
        </Text>
        <Text>
          <Link href="https://www.clarifai.com/models/food-image-recognition-model-bd367be194cf45149e75f01d59f77ba7">
            Clarifai's
          </Link>{' '}
          prediction API is used to analyze the photos to find foods and
          ingredients.
        </Text>
        <Text>
          <Link href="https://spoonacular.com/food-api">Spoonacular's</Link>{' '}
          food API supplies the recipes.
        </Text>
        <Text style={[AppStyles.h2, AppStyles.contentHeading]}>
          Third Party Libraries
        </Text>
        <Text>This app contains software from the following projects:</Text>
        <Text>
          <Text style={AppStyles.title}>Axios</Text> (
          <Link href="https://github.com/axios/axios">
            https://github.com/axios/axios
          </Link>
          )
        </Text>
        <Text>
          <Text style={AppStyles.title}>React Native Camera</Text> (
          <Link href="https://react-native-community.github.io/react-native-camera/">
            https://react-native-community.github.io/react-native-camera/
          </Link>
        </Text>
        <Text>
          <Text style={AppStyles.title}>React Navigation</Text> (
          <Link href="https://reactnavigation.org">
            https://reactnavigation.org
          </Link>
        </Text>
        <Text>
          <Text style={AppStyles.title}>react-native-dotenv</Text> (
          <Link href="https://github.com/zetachang/react-native-dotenv">
            https://github.com/zetachang/react-native-dotenv
          </Link>
        </Text>
        <Text>
          <Text style={AppStyles.title}>react-native-fullwidth-image</Text> (
          <Link href="https://github.com/wassgha/react-native-fullwidth-image">
            https://github.com/wassgha/react-native-fullwidth-image
          </Link>
        </Text>
        <Text style={[AppStyles.h2, AppStyles.contentHeading]}>
          Tested With
        </Text>
        <Text>
          <Text style={AppStyles.title}>React Native Testing Library</Text> (
          <Link href="https://www.native-testing-library.com">
            https://www.native-testing-library.com
          </Link>
        </Text>
      </View>
    </ScrollView>
    <BottomTabs navigation={navigation} />
  </SafeAreaView>
);

AboutScreen.navigationOptions = {
  title: 'About ISpyRecipes',
};

export default AboutScreen;
