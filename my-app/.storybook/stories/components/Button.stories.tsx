import React, { ReactNode } from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, CenterView } from 'components';

storiesOf('Button', module)
  .addDecorator((getStory: () => ReactNode) => (
    <CenterView>{getStory()}</CenterView>
  ))
  .add('default', () => <Button title="Button" />);
