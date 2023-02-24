import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DetailsScreen, SplashScreen } from '@screens';
import { IFood } from '@types';
import React from 'react';
import TabNavigator from './TabNavigator';

export type RootStackParamsList = {
  Main: undefined;
  Splash: undefined;
  Details: { id: number; onChange: (food: IFood) => void };
};

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
        <RootStack.Screen name="Main" component={TabNavigator} />
        <RootStack.Screen name="Details" component={DetailsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
