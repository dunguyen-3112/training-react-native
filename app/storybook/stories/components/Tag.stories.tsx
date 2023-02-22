import { Tag } from '@components';
import { storiesOf } from '@storybook/react-native';
import CenterView from './CenterView';
import React from 'react';

storiesOf('Tag', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Javascript', () => <Tag title="Javascript" />);
