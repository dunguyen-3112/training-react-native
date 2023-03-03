import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

import { useFoods } from '@hooks';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProps } from '@navigation';
import { Empty, Foods, Header, Loading, Search, Tags } from '@components';

const SearchScreen = () => {
  const { navigate } = useNavigation<RootScreenNavigationProps<'Search'>>();
  const [text, setText] = useState('');
  const { loading, foods, setQuery, fetch } = useFoods();

  useEffect(() => {
    setQuery({ name: text });
  }, [setQuery, text]);

  const handleChangeTextSearch = useCallback((text: string) => {
    setText(text);
  }, []);

  const handleSelectTag = useCallback(
    (id: number) => {
      setQuery({ category: { id: id } });
    },
    [setQuery]
  );

  const handlePressItem = useCallback(
    (id: number) => {
      navigate('Details', { id, onChange: () => fetch() });
    },
    [fetch, navigate]
  );

  return (
    <View style={styles.container}>
      <Header />

      <Search value={text} onChangeText={handleChangeTextSearch} />

      <Tags marginTop={17} onSelect={handleSelectTag} />

      {loading ? (
        <Loading marginTop={120} />
      ) : foods === undefined || foods.length === 0 ? (
        <Empty />
      ) : (
        <Foods foods={foods} onPressItem={handlePressItem} />
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
