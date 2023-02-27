import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import { Foods, Loading, NotFound, Search } from '@components';
import { IFood } from '@types';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProps } from '@navigation';
import { useFoodFavorite } from '@hooks';

const FavoriteScreen = () => {
  const { navigate } = useNavigation<RootScreenNavigationProps<'Favorite'>>();

  const [text, setText] = useState('');
  const { error, data, loading, fetch } = useFoodFavorite();

  const handleChangeTextSearch = useCallback((text: string) => {
    setText(text);
  }, []);

  const handlePressItem = useCallback(
    (id: number) => {
      navigate('Details', {
        id,
        onChange: () => fetch(),
      });
    },
    [fetch, navigate]
  );

  return (
    <View style={styles.container}>
      <Search value={text} onChangeText={handleChangeTextSearch} />
      {data === undefined ? (
        <View style={styles.container}>
          <NotFound marginTop={200} />
        </View>
      ) : (
        <Foods foods={data} onPressItem={handlePressItem} />
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
