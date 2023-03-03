import { render, screen, fireEvent } from '@utils/test-utils';
import React from 'react';
import Component, { FoodsProps } from '../index';

import { MOCK_FOODS } from '@__mock__';

const mockFoodOnPress = jest.fn();

function setup(props: FoodsProps) {
  return render(<Component {...props} />);
}

describe('Component', () => {
  it('renders correctly', () => {
    const component = setup({ foods: MOCK_FOODS });

    expect(component).toMatchSnapshot();

    MOCK_FOODS.forEach(({ name }) => {
      if (name) expect(screen.getByText(name)).toBeTruthy();
    });

    const item = MOCK_FOODS[0];
    if (item.name) {
      const select = component.getByText(item.name).parent;
      if (select) {
        fireEvent.press(select);
        // expect(mockFoodOnPress).toHaveBeenCalledWith(item.id);
      }
    }
  });
});
