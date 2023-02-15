import React from 'react';
import { StyleSheet, View } from 'react-native';

interface CenterViewProps {
  children: React.ReactNode;
}

export default function CenterView({ children }: CenterViewProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
