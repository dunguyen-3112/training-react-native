import { render } from '@testing-library/react-native';
import React from 'react';
import Component from './index';

describe('Component', () => {
  const view = render(<Component />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
