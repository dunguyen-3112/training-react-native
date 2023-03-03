import React from 'react';
import { render, screen } from '@utils/test-utils';

import Home from './index';
import { useFoods } from '@hooks';
import { MOCK_FOODS } from '@__mock__';

jest.mock('@hooks/useFood');

describe('Home', () => {
  it('renders list food', () => {
    (useFoods as jest.Mock).mockReturnValue({ foods: MOCK_FOODS });

    render(<Home />);

    MOCK_FOODS.forEach(({ name }) => {
      if (name) expect(screen.getByText(name)).toBeTruthy();
    });
  });
});
