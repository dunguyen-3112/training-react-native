import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoriteScreen, HomeScreen, SearchScreen } from '@screens';
import { FAVORITE, HOME, SEARCH } from '@constants';

import { Image } from 'react-native';
import {
  FavoriteMenu,
  FavoriteMenuFill,
  HomeMenu,
  HomeMenuFill,
  SearchMenuFill,
  SearchMenu,
} from '@themes/index';

export type TabParamsList = {
  [FAVORITE]: undefined;
  [HOME]: undefined;
  [SEARCH]: undefined;
};
const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: { height: 80 },
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case FAVORITE:
              icon = focused ? FavoriteMenuFill : FavoriteMenu;
              break;
            case HOME:
              icon = focused ? HomeMenuFill : HomeMenu;
              break;
            case SEARCH:
              icon = focused ? SearchMenuFill : SearchMenu;
              break;
          }
          return <Image source={icon} />;
        },
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen name={HOME} component={HomeScreen} />
      <Tab.Screen name={SEARCH} component={SearchScreen} />
      <Tab.Screen name={FAVORITE} component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
