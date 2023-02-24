import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { Foods, Loading, NotFound, Search } from '@components';
import { useFetch } from '@hooks';
import { IFood } from '@types';
import { useState } from 'react';

const FavoriteScreen = () => {
  const [text, setText] = useState('');
  const { isLoading, data } = useFetch<IFood[]>({
    url: `foods?favorite=1&name_like=${text}`,
  });

  const [foods, setFoods] = useState<IFood[]>();

  useEffect(() => {
    if (data) setFoods(data);
  }, [data]);

  const handleChangeTextSearch = useCallback((text: string) => {
    setText(text);
  }, []);

  const handleChangeFoods = useCallback((foods: IFood[]) => {
    if (foods) {
      const newFoods = foods.filter((food: IFood) => food.favorite === 1);
      setFoods(newFoods);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Search value={text} onChangeText={handleChangeTextSearch} />
      {foods === undefined || foods?.length === 0 ? (
        <View style={styles.container}>
          <NotFound marginTop={200} />
        </View>
      ) : isLoading ? (
        <Loading marginTop={120} />
      ) : (
        <Foods foods={foods} onChange={handleChangeFoods} />
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
