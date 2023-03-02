import React from 'react';
import { render, screen } from '@utils/test-utils';

import RootNavigator from '../RootNavigator';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('RootNavigator', () => {
  test('should create a navigation container', async () => {
    const component = <RootNavigator />;

    render(component, {});

    const title = await screen.getByText('Laomica');
    const text = await screen.getByText(
      `Stay Heatlthy and beatifull\nwith us!`
    );
    expect(title).toBeDefined();
    expect(text).toBeDefined();
  });
});
