import { StyleSheet, View, Image } from 'react-native';
import React, { useState, useCallback, memo } from 'react';

import { COLORS } from '@constants';
import Input from './Input';

const Search = () => {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearched = useCallback((value: string) => {
    setSearchText(value);
  }, []);

  return (
    <View style={styles.container}>
      <Input
        field="search"
        onChangeText={handleChangeSearched}
        value={searchText}
        placeholder="Search for healthy food"
      />
      <Image
        source={require('@assets/icons/iconsearch.png')}
        style={styles.iconSearch}
      />
    </View>
  );
};

export default memo(Search);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.ORANGE_BLUR_COLOR,
    borderRadius: 15,
    zIndex: 1,
    marginTop: 14,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: '#DA6317',
    paddingVertical: 14,
    paddingHorizontal: 60,
  },
  iconSearch: {
    position: 'absolute',
    left: 21,
    top: '50%',
    transform: [{ translateY: -10 }],
  },
});
