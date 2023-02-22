import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { Foods, Header, Loading, Search, Cards, Tags } from '@components';
import { IFood } from '@types';
import { useFetch } from '@hooks';
import { useNavigation } from '@react-navigation/native';

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
          <Cards marginTop={17} />
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
