import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteScreen, HomeScreen, SearchScreen } from '@screens';
import { Image } from 'react-native';

export type TabParamsList = {
  Favorite: undefined;
  Home: undefined;
  Search: undefined;
};
const TabNavigator = () => {
  const Tab = createBottomTabNavigator<TabParamsList>();

  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: { height: 80 },
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          switch (route.name) {
            case 'Favorite':
              icon = focused
                ? require('@assets/icons/favoritefill.png')
                : require('@assets/icons/favorite.png');
              break;
            case 'Home':
              icon = focused
                ? require('@assets/icons/homefill.png')
                : require('@assets/icons/home.png');
              break;
            case 'Search':
              icon = focused
                ? require('@assets/icons/searchfill.png')
                : require('@assets/icons/search.png');
              break;
          }
          return <Image source={icon} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
