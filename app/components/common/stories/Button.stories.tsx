import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { action } from '@storybook/addon-actions';

import CenterView from '@mstorybook/stories/CenterView';
import Button from '../Button';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Button label="Button" />)
  .add('Type primary', () => <Button label="Button" type="primary" />)
  .add('Type secondary', () => <Button label="Button" type="secondary" />)
  .add('type primary set style', () => (
    <Button
      label="Button"
      type="primary"
      paddingHorizontal={22}
      paddingVertical={10}
      borderRadius={5}
      onPress={action('Button Press!')}
    />
  ));
