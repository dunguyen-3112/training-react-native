import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import { useFood } from '@hooks';
import { Foods, NotFound, Search } from '@components';
import { RootScreenNavigationProps } from '@navigation';
import { DETAIL, FAVORITE } from '@constants';
import { IFood } from '@types';

const FavoriteScreen = () => {
  const { navigate } =
    useNavigation<RootScreenNavigationProps<typeof FAVORITE>>();

  const { data, fetch, setQuery, query } = useFood<IFood[]>({
    isFavorite: true,
  });

  const handleChangeTextSearch = useCallback(
    (text: string) => {
      setQuery((prev) => ({ ...prev, name: text }));
    },
    [setQuery]
  );

  const handlePressItem = useCallback(
    (id: number) => {
      navigate(DETAIL, {
        id,
        onChange: () => fetch(),
      });
    },
    [fetch, navigate]
  );

  return (
    <View style={styles.container}>
      <Search value={query?.name} onChangeText={handleChangeTextSearch} />

      {data === undefined || data.length === 0 ? (
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
