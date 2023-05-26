import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FoodOptions, useFood } from '@hooks';
import { RootScreenNavigationProps } from '@navigation';
import {
  Header,
  Search,
  Cards,
  Categories,
  FoodsHorizontal,
  FoodsVertical,
} from '@components';
import { DETAIL, SEARCH, HOME } from '@constants';
import { IFood } from '@types';

const HomeScreen = () => {
  const { navigate, goBack } =
    useNavigation<RootScreenNavigationProps<typeof HOME>>();
  const { data, fetch, setQuery, query } = useFood<IFood[]>();

  const { categories }: FoodOptions = query || {};

  const handlePressItem = useCallback(
    (id: number) => {
      navigate(DETAIL, { id, onChange: () => fetch(), onBack: () => goBack() });
    },
    [fetch, goBack, navigate]
  );

  const handleChangeTag = useCallback(
    (ids: number[]) => {
      if (ids) setQuery({ categories: ids });
    },
    [setQuery]
  );

  const handleFocusSearch = useCallback(() => {
    navigate(SEARCH);
    return false;
  }, [navigate]);

  return (
    <View style={styles.container}>
      <Header />
      <Search onFocus={handleFocusSearch} isFocus={false} />
      <Categories marginTop={17} onSelect={handleChangeTag} />
      {(categories === undefined || categories.length === 0) && (
        <Cards marginTop={17} />
      )}
      {data &&
        (categories === undefined || categories.length === 0 ? (
          <FoodsHorizontal foods={data} onPressItem={handlePressItem} />
        ) : (
          <FoodsVertical foods={data} onPressItem={handlePressItem} />
        ))}
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
