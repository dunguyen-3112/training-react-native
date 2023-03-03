import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FavoriteScreen, HomeScreen, SearchScreen } from '@screens';
import { FavoriteMenu, HomeMenu, SearchMenu } from '@constants';

export type TabParamsList = {
  Favorite: undefined;
  Home: undefined;
  Search: undefined;
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
            case 'Favorite':
              return <FavoriteMenu isFill={focused} />;
            case 'Home':
              return <HomeMenu isFill={focused} />;
            case 'Search':
              return <SearchMenu isFill={focused} />;
          }
        },
        unmountOnBlur: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
