import { StyleSheet, Text, View } from 'react-native';
import React, { ReactNode } from 'react';

interface CenterView {
  children: ReactNode;
}

const CenterView = ({ children }: CenterView) => {
  return <View style={styles.container}>{children}</View>;
};

export default CenterView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
