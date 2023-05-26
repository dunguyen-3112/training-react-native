import React from 'react';
import { render, screen } from '@utils/test-utils';

import Ingredient from './index';
import { MOCK_INGREDIENTS } from '@__mock__';

describe('Test Ingredient', () => {
  test('should', async () => {
    const component = render(<Ingredient data={MOCK_INGREDIENTS} />);
    expect(component.toJSON()).toMatchSnapshot();

    const seeAll = await screen.findByText('See All');
    const title = await screen.findByText('Ingrediants');
    expect(seeAll).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
