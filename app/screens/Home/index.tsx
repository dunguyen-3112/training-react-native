import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useFoods } from '@hooks';
import { RootScreenNavigationProps } from '@navigation';
import { Foods, Header, Search, Cards, Tags } from '@components';
import { CATEGORIES } from '@constants';

const HomeScreen = () => {
  const { navigate } = useNavigation<RootScreenNavigationProps<'Home'>>();
  const { foods, fetch, setQuery } = useFoods();

  const handlePressItem = useCallback(
    (id: number) => {
      navigate('Details', { id, onChange: () => fetch() });
    },
    [fetch, navigate]
  );

  const handleChangeTagName = useCallback(
    (id: number) => {
      if (id) setQuery({ category: { id: id } });
    },
    [setQuery]
  );

  const handleFocusSearch = useCallback(() => {
    navigate('Search');
    return false;
  }, [navigate]);

  return (
    <View style={styles.container}>
      <>
        <Header />
        <Search onFocus={handleFocusSearch} isFocus={false} />
        <Tags
          marginTop={17}
          onSelect={handleChangeTagName}
          categories={CATEGORIES}
        />
        <Cards marginTop={17} />
        {foods && (
          <Foods foods={foods} horizontal onPressItem={handlePressItem} />
        )}
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
