import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';
import { render } from '@testing-library/react-native';

describe('Button', () => {
  const view = renderer.create(<Button />);
  it('has a default', () => {
    expect(view.toJSON()).toMatchSnapshot();
  });
  it('should render', () => {
    render(<Button />);
  });
});
