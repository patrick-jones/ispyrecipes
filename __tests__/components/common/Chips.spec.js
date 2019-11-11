import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Chips} from 'app/components/common';

const foobarbaz = ['foo', 'bar', 'baz'];
const dingdong = ['ding', 'dong'];

describe('Chips', () => {
  it('Should render', () => {
    const {baseElement} = render(
      <Chips keywords={foobarbaz} onSelectionChanged={() => null} />,
    );
    expect(baseElement).not.toBeNull();
  });

  it('Should handle selection changes', () => {
    const callback = jest.fn();
    const {getByText} = render(
      <Chips keywords={foobarbaz} onSelectionChanged={callback} />,
    );
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(foobarbaz);

    callback.mockReset();
    const pressable = getByText('foo');
    fireEvent.press(pressable);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(['bar', 'baz']);
  });

  it('Should handle initial props changes', () => {
    const callback = jest.fn();
    const {rerender, getByText} = render(
      <Chips keywords={foobarbaz} onSelectionChanged={callback} />,
    );
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(foobarbaz);

    callback.mockReset();
    rerender(<Chips keywords={dingdong} onSelectionChanged={callback} />);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(dingdong);

    callback.mockReset();
    const pressable = getByText('dong');
    fireEvent.press(pressable);
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback).toHaveBeenCalledWith(['ding']);
  });
});
