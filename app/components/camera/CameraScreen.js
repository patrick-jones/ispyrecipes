import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';

import Camera from './Camera';

import {api} from 'app/clarifai';

import AppStyles from 'app/AppStyles';

class CameraScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    focused: true,
  };

  componentDidMount() {
    const {navigation} = this.props;
    navigation.addListener('willFocus', () => this.setState({focused: true}));
  }

  handleNewPhoto = async photoBase64 => {
    const {navigation} = this.props;
    const keywords = await api.extractKeywords(photoBase64);
    this.setState({focused: false});
    navigation.navigate('RecipeList', {
      keywords,
    });
  };

  render() {
    const {focused} = this.state;
    return (
      <SafeAreaView style={AppStyles.container}>
        {focused ? <Camera onPhotoTaken={this.handleNewPhoto} /> : <View />}
      </SafeAreaView>
    );
  }
}

export default CameraScreen;
