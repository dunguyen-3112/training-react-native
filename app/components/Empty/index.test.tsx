import { render, screen } from '@utils/test-utils';
import React from 'react';
import Component from './index';

function setup() {
  const component = render(<Component />);
  expect(component).toMatchSnapshot();
}
describe('Component', () => {
  setup();
  it('Check Title', () => {
    const title = screen.getByText('No Results Found');
    expect(title).toBeTruthy();
  });
});
