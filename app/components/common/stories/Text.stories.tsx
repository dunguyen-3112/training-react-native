import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '@mstorybook/stories/CenterView';
import Text from '../Text';

storiesOf('Text', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Text>This is Text!</Text>)
  .add('Text with props', () => (
    <Text fontSize="xl-7" fontWeight="800">
      This is Text!
    </Text>
  ));
