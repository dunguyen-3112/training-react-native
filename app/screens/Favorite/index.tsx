import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { Empty, Foods, Loading, NotFound, Search, Text } from '@components';
import { useFetch } from '@hooks';
import { IFood } from '@types';
import { useState } from 'react';

const FavoriteScreen = () => {
  const [text, setText] = useState('');
  const { isLoading, data, error } = useFetch<IFood[]>({
    url: `foods?favorite=1&name_like=${text}`,
  });

  const handleChangeTextSearch = useCallback((text: string) => {
    setText(text);
  }, []);

  return (
    <View style={styles.container}>
      <Search value={text} onChangeText={handleChangeTextSearch} />
      {data?.length === 0 ? (
        <View style={styles.container}>
          <NotFound marginTop={200} />
        </View>
      ) : isLoading ? (
        <Loading marginTop={120} />
      ) : (
        <Foods horizontal foods={data} />
      )}
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 62,
    paddingHorizontal: 16,
  },
});
