import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Camera} from 'app/components/camera';

describe('Camera component', () => {
  it('should render', () => {
    const {baseElement} = render(<Camera onPhotoTaken={() => null} />);
    expect(baseElement).not.toBeNull();
  });

  it('should snap a photo when button pressed', async () => {
    const handlePress = jest.fn();
    const {getByHintText} = render(<Camera onPhotoTaken={handlePress} />);
    const pressable = getByHintText('Snap photo');
    fireEvent.press(pressable);

    await new Promise(resolve => setTimeout(resolve, 500));

    expect(handlePress).toHaveBeenCalledTimes(1);
    expect(handlePress).toHaveBeenCalledWith('base64string');
  });
});
