import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

const fakeInput = {
  field: 'Name',
  value: 'User Name',
  onChangeText: jest.fn(),
};

describe('Input', () => {
  const input = renderer.create(<Input {...fakeInput} />);
  it('renders correctly', () => {
    expect(input).toMatchSnapshot();
  });
});
