import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { RootNavigator } from './navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

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

export default App;
// export { default } from './storybook';
