import { TNutritional } from '@types';
import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';

import Nutritional from '../index';

describe('NutritionalItem', () => {
  const nutritional: TNutritional = {
    carbs: 200,
    fat: 200,
    protein: 200,
    calories: 200,
  };

  let component: ReactTestRenderer;
  beforeEach(() => {
    component = renderer.create(<Nutritional nutritional={nutritional} />);
  });

  it('renders correctly', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
