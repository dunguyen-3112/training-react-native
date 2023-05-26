import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoriteScreen, HomeScreen, SearchScreen } from '@screens';
import {
  FAVORITE,
  FavoriteMenu,
  HOME,
  HomeMenu,
  SEARCH,
  SearchMenu,
} from '@constants';

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
          switch (route.name) {
            case FAVORITE:
              return <FavoriteMenu isFill={focused} />;
            case HOME:
              return <HomeMenu isFill={focused} />;
            case SEARCH:
              return <SearchMenu isFill={focused} />;
          }
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
