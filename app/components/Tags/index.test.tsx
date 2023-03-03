import { render, screen } from '@utils/test-utils';
import React from 'react';
import Component from './index';

describe('Component', () => {
  const view = render(<Component />);

  it('snapshot', () => {
    expect(view).toMatchSnapshot();
  });
});
