import { CATEGORIES } from '@constants';
import { render, screen, fireEvent } from '@utils/test-utils';
import React from 'react';

import Categories from './index';

const mockOnPress = jest.fn();

const selects: number[] = [];

const setup = () => {
  const component = render(
    <Categories onSelect={mockOnPress} selects={selects} />
  );
  expect(component.toJSON()).toMatchSnapshot();
};

describe('Categories', () => {
  it('should render List', () => {
    setup();
    CATEGORIES.forEach((category) => {
      expect(screen.getByText(category.name || '')).toBeTruthy();
    });

    CATEGORIES.forEach((category) => {
      const { name, id } = category || {};

      if (name) {
        const item = screen.getByText(name);
        fireEvent.press(item);
        selects.push(id);
        expect(mockOnPress).toHaveBeenCalledWith(selects);
      }
    });
  });
});
