import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {RNCamera} from 'react-native-camera';

import * as Colors from 'app/Colors';
import AppStyles from 'app/AppStyles';

const Camera = ({onPhotoTaken}) => {
  const cameraRef = useRef(null);
  const [busy, setBusy] = useState(false);

  const handlePress = async () => {
    const camera = cameraRef.current;
    if (camera) {
      setBusy(true);
      const {base64} = await camera.takePictureAsync({
        base64: true,
        doNotSave: true,
        quality: 0.8,
        width: 1080,
        height: 1920,
        pauseAfterCapture: true,
      });
      onPhotoTaken(base64);
    }
  };

  const promptText = busy
    ? 'Elves are analyzing your photo...'
    : 'Snap a photo of food, get recipe suggestions';

  return (
    <View style={AppStyles.container}>
      <RNCamera ref={cameraRef} style={Styles.camera}>
        <Text style={Styles.promptText}>{promptText}</Text>
        <View style={Styles.controls}>
          {busy && <ActivityIndicator animating size="large" />}
          {!busy && (
            <TouchableOpacity
              accessibilityHint="Snap photo"
              style={Styles.button}
              onPress={handlePress}
            />
          )}
        </View>
      </RNCamera>
    </View>
  );
};

Camera.propTypes = {
  onPhotoTaken: PropTypes.func.isRequired,
};

const Styles = StyleSheet.create({
  camera: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  promptText: {
    color: Colors.White,
    opacity: 0.75,
  },
  controls: {
    justifyContent: 'center',
    height: 80,
  },
  button: {
    backgroundColor: Colors.White,
    opacity: 0.25,
    height: 60,
    width: 60,
    borderColor: Colors.Border,
    borderWidth: 1,
    borderRadius: 30,
  },
});

export default Camera;
