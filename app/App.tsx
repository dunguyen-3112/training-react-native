import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import Constants from 'expo-constants';
import Storybook from './storybook';

import { RootNavigator } from './navigation';
import * as SplashScreen from 'expo-splash-screen';

const App = () => {
  const [fontsLoaded] = useFonts({
    Manrope: require('@assets/fonts/Manrope.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// export default Constants.expoConfig?.extra?.storybook === false
//   ? App
//   : Storybook;

export default App;
// export { default } from './storybook';
