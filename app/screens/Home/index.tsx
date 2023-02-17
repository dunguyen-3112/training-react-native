import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FavoriteTab, SearchTab, HomeTab } from './Tabs';
import { Icon } from '@components';
import { NameIcon } from '@components/Icon';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName: NameIcon = 'Home';
            if (route.name === 'Home') {
              iconName = focused ? 'Home_Fill' : 'Home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'Search_Fill' : 'Search';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'Favorite_Fill' : 'Favorite';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} />;
          },
          tabBarLabel: '',
          tabBarStyle: {
            height: 80,
          },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Search"
          component={SearchTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoriteTab}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
