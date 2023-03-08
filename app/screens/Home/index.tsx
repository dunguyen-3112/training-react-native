import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useFood } from '@hooks';
import { RootScreenNavigationProps } from '@navigation';
import { Foods, Header, Search, Cards, Categories } from '@components';
import { DETAIL, SEARCH, HOME } from '@constants';
import { IFood } from '@types';

const HomeScreen = () => {
  const { navigate, goBack } =
    useNavigation<RootScreenNavigationProps<typeof HOME>>();
  const { data, fetch, setQuery } = useFood<IFood[]>();

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
      <Cards marginTop={17} />
      {data && <Foods foods={data} horizontal onPressItem={handlePressItem} />}
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
