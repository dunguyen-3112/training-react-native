import {
  getStorybookUI,
  addDecorator,
  configure,
} from '@storybook/react-native';
import { AppRegistry } from 'react-native';
import { withKnobs } from '@storybook/addon-knobs';

import './rn-addons';

addDecorator(withKnobs);

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI();

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
