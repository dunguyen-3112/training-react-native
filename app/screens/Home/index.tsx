import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Foods, Header, Loading, Search, Slide, Tags } from '@components';
import { IFood } from '@types';
import { useFetch } from '@hooks';

const HomeScreen = () => {
  const { isLoading, data, error } = useFetch<IFood>({ url: 'foods' });

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Loading marginTop={100} />
      ) : (
        <>
          <Header />
          <Search />
          <Tags marginTop={17} />
          <Slide marginTop={17} />
          <Foods foods={data} />
        </>
      )}
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
