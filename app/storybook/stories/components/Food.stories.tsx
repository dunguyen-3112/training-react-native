import React from 'react';
import { storiesOf } from '@storybook/react-native';

import CenterView from './CenterView';
import { Food } from '@components';

storiesOf('Food', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('abc', () => (
    <Food
      cal={12}
      name="food"
      weight={30}
      image="https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a1.png?alt=media&token=4e7e33d8-eb6e-4fbf-8ca9-d7cca5eb001c"
    />
  ));
