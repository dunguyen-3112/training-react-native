import RootNavigator, { RootStackParamsList } from './RootNavigator';
import { TabParamsList } from './TabNavigator';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';

type MainScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamsList>,
  NativeStackNavigationProp<RootStackParamsList, 'Main'>
>;

export {
  RootNavigator,
  TabParamsList,
  RootStackParamsList,
  MainScreenNavigationProps,
};
