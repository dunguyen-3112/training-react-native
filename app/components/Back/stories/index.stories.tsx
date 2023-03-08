import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import React from 'react';

import CenterView from '@mstorybook/stories/CenterView';
import Back from '../index';

storiesOf('Back', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Back onPress={action('Back Press')} />);
