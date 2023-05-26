import RootNavigator, { RootStackParamsList } from './RootNavigator';
import { TabParamsList } from './TabNavigator';

import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CompositeNavigationProp } from '@react-navigation/native';

export type RootScreenNavigationProps<T extends keyof RootStackParamsList> =
  CompositeNavigationProp<
    BottomTabNavigationProp<TabParamsList>,
    NativeStackNavigationProp<RootStackParamsList, T>
  >;

export { RootNavigator, TabParamsList, RootStackParamsList };
