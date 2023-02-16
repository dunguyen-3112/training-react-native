import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailsTab, HomeTab } from './Tabs';

const Home = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsTab}
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
  },
});
