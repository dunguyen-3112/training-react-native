import { storiesOf } from '@storybook/react-native';
import React from 'react';

import CenterView from '@mstorybook/stories/CenterView';
import Card from '../Card';
import { MOCK_ACTICLES } from '@__mock__';

const acticleFirst = MOCK_ACTICLES[0];
const { name = 'The Food', image = '' } = acticleFirst;

storiesOf('Card', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Card title={name} image={image} />)
  .add('secondary', () => <Card title={name} image={image} type="secondary" />);
