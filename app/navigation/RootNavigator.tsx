import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, SplashScreen } from '@screens';
import { IFood } from '@types';
import React from 'react';
import TabNavigator, { TabParamsList } from './TabNavigator';

export type RootStackParamsList = {
  Root: undefined;
  Splash: undefined;
  Details: {
    id: number;
    onChange?: () => void;
  };
} & TabParamsList;

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamsList>();

  return (
    <RootStack.Navigator
      screenOptions={() => {
        return {
          headerShown: false,
        };
      }}
    >
      <RootStack.Group>
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Root" component={TabNavigator} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
