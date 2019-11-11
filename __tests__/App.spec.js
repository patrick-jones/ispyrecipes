jest.mock('app/clarifai/api');
jest.mock('app/spoonacular/api');

import React from 'react';
import {fireEvent, render, waitForElement} from '@testing-library/react-native';

import App from '../App';

describe('App', () => {
  it('Should render', () => {
    const {baseElement} = render(
      <App />,
    );

    expect(baseElement).not.toBeNull();
  });

  it('Should pass a basic end-to-end test', async () => {
    const {getByHintText, getAllByHintText, getByTestId, getByText} = render(
      <App />,
    );

    // start at camera screen
    const cameraButton = await waitForElement(() =>
      getByHintText('Snap photo'),
    );
    fireEvent.press(cameraButton);

    // should go to results screen
    await waitForElement(() => getByTestId(`RecipeListItem-876469`));
    const allRecipes = getAllByHintText('View recipe details');
    expect(allRecipes).toHaveLength(9);
    fireEvent.press(allRecipes[0]);

    // should go to recipe screen
    const title = await waitForElement(() => getByText('Honey Pineapple Rainbow Fruit Salad'));
    expect(title).not.toBeNull();

    // check the about screen
    const aboutButton = await waitForElement(() =>
      getByHintText('View about screen'),
    );

    fireEvent.press(aboutButton);
    const about = await waitForElement(() => getByText('About'));
    expect(about).not.toBeNull();

    // go back home
    const againButton = await waitForElement(() =>
      getByHintText('Return to camera screen'),
    );

    fireEvent.press(againButton);
    const cameraButton2 = await waitForElement(() =>
      getByHintText('Snap photo'),
    );
    expect(cameraButton2).not.toBeNull();
  });
});
