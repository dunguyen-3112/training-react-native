import { StyleSheet, View } from 'react-native';
import React from 'react';
import Navigation from './navigation';

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export { default } from './storybook';
