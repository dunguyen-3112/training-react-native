import { CATEGORIES } from '@constants';
import { render, screen, fireEvent } from '@utils/test-utils';
import React from 'react';

import Categories from './index';

const mockOnPress = jest.fn();

const setup = () => {
  const component = render(<Categories />);
  expect(component.toJSON()).toMatchSnapshot();
};

describe('Categories', () => {
  it('should render List', () => {
    setup();
    CATEGORIES.forEach((category) => {
      expect(screen.getByText(category.name || '')).toBeTruthy();
    });
  });
});
