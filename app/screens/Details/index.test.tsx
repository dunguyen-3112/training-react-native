import { render } from '@testing-library/react-native';
import React from 'react';
import Screen from './index';

describe('Screen', () => {
  const view = render(<Screen />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
