import { render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from './index';

describe('Home', () => {
  const view = render(<HomeScreen />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
