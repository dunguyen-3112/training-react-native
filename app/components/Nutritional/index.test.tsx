import React from 'react';
import { render, screen } from '@utils/test-utils';

import Nutritional from './index';
import { MOCK_NUTRITIONAL } from '@__mock__';

describe('Test Ingredient', () => {
  if (MOCK_NUTRITIONAL) {
    const nutritional = MOCK_NUTRITIONAL[0];
    test('should', async () => {
      const component = render(<Nutritional nutritional={nutritional} />);

      Object.keys(nutritional).forEach((key) => {
        expect(component.getByText(key)).toBeTruthy();
        expect(
          component.getByText(
            `${nutritional[key as keyof typeof nutritional]}g`
          )
        ).toBeTruthy();
      });
    });
  }
});
