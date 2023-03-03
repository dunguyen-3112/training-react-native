import React from 'react';
import Button, { ButtonProps } from '../Button';
import { render, screen } from '@utils/test-utils';

const setup = (props: ButtonProps = {}) => {
  render(<Button {...props} />);
};

describe('Button', () => {
  it('should render default props', () => {
    setup({ label: 'Button' });
    expect(screen.getByText('Button')).toBeTruthy();
  });

  it('should render type primary', () => {
    setup({ label: 'Button', type: 'primary' });
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('should render type secondary', () => {
    setup({ label: 'Button', type: 'secondary' });
    expect(screen.toJSON()).toMatchSnapshot();
  });
});
