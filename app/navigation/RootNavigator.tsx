import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DetailsScreen, SplashScreen } from '@screens';
import TabNavigator, { TabParamsList } from './TabNavigator';
import { DETAIL, ROOT, SPLASH } from '@constants';

export type RootStackParamsList = {
  [ROOT]: undefined;
  [SPLASH]: undefined;
  [DETAIL]: {
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
        <RootStack.Screen name={SPLASH} component={SplashScreen} />
        <RootStack.Screen name={ROOT} component={TabNavigator} />
        <RootStack.Screen name={DETAIL} component={DetailsScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
