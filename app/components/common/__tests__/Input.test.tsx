import React from 'react';
import Input from '../Input';
import { render, screen } from '@utils/test-utils';

const fakeInput = {
  field: 'Name',
  value: 'Du Nguyen',
  label: 'User Name',
  onChangeText: jest.fn(),
};

describe('Input', () => {
  it('should render correctly', () => {
    render(<Input {...fakeInput} />);
    expect(screen.getByText(fakeInput.label)).toBeTruthy();
  });

  it('should render correctly', () => {
    render(<Input {...fakeInput} />);
    expect(screen.getByDisplayValue(fakeInput.value)).toBeTruthy();
  });
});
