import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Header } from '../../../layouts';
import { Foods, SearchCtr, Slide, Tags } from '@components';
import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
  const Stack = createStackNavigator();
  const tags = [
    {
      id: 1,
      title: 'React',
    },
    {
      id: 2,
      title: 'Redux',
    },
    {
      id: 3,
      title: 'React Native',
    },
    {
      id: 4,
      title: 'Node',
    },
    {
      id: 5,
      title: 'Express',
    },
    {
      id: 6,
      title: 'MongoDB',
    },
    {
      id: 7,
      title: 'GraphQL',
    },
  ];

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

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
});
