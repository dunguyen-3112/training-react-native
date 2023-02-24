import React from 'react';
import renderer from 'react-test-renderer';

import NutritionalItem from '../NutritionalItem';

describe('NutritionalItem', () => {
  const nutritional = { key: 'Protein', value: 300 };
  beforeEach(() => {
    renderer.create(<NutritionalItem {...nutritional} />);
  });
});
