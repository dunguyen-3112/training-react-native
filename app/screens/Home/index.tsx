import { StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { Foods, Header, Loading, Search, Cards, Tags } from '@components';
import { IFood } from '@types';
import { useFetch } from '@hooks';

const HomeScreen = () => {
  const [query, setQuery] = useState('foods');
  const { isLoading, data } = useFetch<IFood[]>({
    url: query,
  });

  const handleChangeTagName = useCallback((id: number) => {
    if (id) setQuery(`foods?category=${id}`);
    else setQuery('foods');
  }, []);

  return (
    <View style={styles.container}>
      <>
        <Header />
        <Search />
        <Tags marginTop={17} onSelect={handleChangeTagName} />
        <Cards marginTop={17} />
        {data && <Foods foods={data} horizontal />}
      </>
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
