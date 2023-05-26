import React from 'react';
import { render, screen } from '@utils/test-utils';

import Header from './index';

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Test Header', () => {
  test('should', async () => {
    render(<Header />, {
      wrapper: undefined,
    });

    const title = await screen.findByText(`Want to eat\nhealthy Food?`);
    expect(title).toBeDefined();
  });
});
