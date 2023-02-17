import { StyleSheet, View } from 'react-native';
import React from 'react';
import Navigation from './navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

// export { default } from './storybook';
