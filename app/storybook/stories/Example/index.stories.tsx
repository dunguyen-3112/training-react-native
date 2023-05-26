import { storiesOf } from '@storybook/react-native';
import CenterView from '../CenterView';

import Example from './index';

storiesOf('Example', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <Example />);
