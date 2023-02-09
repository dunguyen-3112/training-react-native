import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StorybookUI from './storybook';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen } from '@screens';

const STORYBOOK_START = false;

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home'
        component={HomeScreen}
        />
        <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default STORYBOOK_START ? StorybookUI : App; 

