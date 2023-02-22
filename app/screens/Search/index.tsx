import { StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { Empty, Foods, Header, Loading, Search, Tags } from '@components';
import { useFetch } from '@hooks';
import { IFood } from '@types';

const SearchScreen = () => {
  const [text, setText] = useState('');
  const { isLoading, data, error } = useFetch<IFood[]>({
    url: `foods?name_like=${text}`,
  });

  const foods = useMemo(() => {
    if (text === '') return [];
    return data;
  }, [text, data]);

  const handleChangeTextSearch = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Search value={text} onChangeText={handleChangeTextSearch} />
      <Tags marginTop={17} />
      {isLoading ? (
        <Loading marginTop={120} />
      ) : foods?.length === 0 ? (
        <Empty />
      ) : (
        <Foods foods={foods} horizontal />
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 62,
    padding: 16,
  },
});
