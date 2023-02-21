import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Header } from '@layouts';
import { Foods, SearchCtr, Slide, Tags } from '@components';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SearchCtr />
      <Tags marginTop={17} />
      <Slide marginTop={17} />
      <Foods />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
});
