import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';

import {Chip} from 'app/components/common';

describe('Chip', () => {
  it('Should render', () => {
    const {getByText} = render(
      <Chip label="foobar" selected={true} onSelectChanged={() => null} />,
    );
    const title = getByText('foobar');
    expect(title).not.toBeNull();
  });
});
