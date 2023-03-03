import { render, screen, fireEvent } from '@utils/test-utils';
import { CATEGORIES } from '@constants';
import React from 'react';

import Tags, { ICategories } from './index';

const mockOnPress = jest.fn();

function setup(props: ICategories) {
  return render(<Tags {...props} />);
}

const component = setup({ categories: CATEGORIES });
describe('Categories', () => {
  it('should render List', () => {
    expect(component.toJSON()).toMatchSnapshot();

    CATEGORIES.forEach((category) => {
      expect(screen.getByText(category.name || '')).toBeTruthy();
    });
  });

  it('should render Item 1', () => {
    const { id, name } = CATEGORIES[1];

    const item = screen.getByText('inner');

    expect(item).toMatchSnapshot();
    if (item.parent?.parent) {
      fireEvent.press(item.parent.parent);
      expect(mockOnPress).toHaveBeenCalledWith(2);
    }
  });
});
