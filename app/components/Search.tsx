import { StyleSheet, TextInput, View, Image } from 'react-native';
import React, { useState, useCallback } from 'react';

import { COLOR, COLORS } from '@constants';
import Input from './Input';

const Search = () => {
  const [isFocus, setIsFocus] = useState(true);
  const [searchText, setSearchText] = useState('');

  const handleForcus = useCallback(() => {
    setIsFocus((prev) => !prev);
  }, []);

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
        onFocus={handleForcus}
        onBlur={handleForcus}
      />
      {isFocus && (
        <Image
          source={require('@assets/icons/iconsearch.png')}
          style={styles.iconSearch}
        />
      )}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.ORANGE_BLUR_COLOR,
    borderRadius: 15,
    zIndex: 1,
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
