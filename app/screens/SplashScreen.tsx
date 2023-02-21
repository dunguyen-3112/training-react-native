import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/images/pattern.png')}
        resizeMode="cover"
        style={styles.background}
      />
      <Image source={require('@assets/images/loading.png')} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    width: '100%',
  },
});
