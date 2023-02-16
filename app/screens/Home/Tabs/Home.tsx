import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Header } from '../../../layouts';
import { Search } from '@components';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Search />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    paddingHorizontal: 16,
  },
});
