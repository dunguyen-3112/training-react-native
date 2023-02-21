import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { Header } from '@layouts';
import { Foods, SearchCtr, Slide, Tags } from '@components';
import { IFood } from '@types';
import { useFetch } from '@hooks';

const HomeScreen = () => {
  //   const { isLoading, data, error } = useFetch<IFood>({ url: 'foods' });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://192.168.86.77:3000/foods');
      const json = await response.json();
      console.log(json);
    };
    fetchData();
  }, []);

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
