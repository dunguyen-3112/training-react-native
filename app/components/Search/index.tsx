import { StyleSheet, View } from 'react-native';
import React, { useCallback, memo } from 'react';

import { COLORS } from '@constants';
import { Input } from '@components/common';
import { SearchIcon } from '@constants/Image';

interface SearchProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  isFocus?: boolean;
}

const Search = ({ value = '', onChangeText, onFocus }: SearchProps) => {
  const handleChangeSearched = useCallback(
    (value: string) => {
      onChangeText && onChangeText(value);
    },
    [onChangeText]
  );

  return (
    <View style={styles.container}>
      <Input
        field="search"
        onChangeText={handleChangeSearched}
        onFocus={onFocus}
        value={value}
        placeholder="Search for healthy food"
      />
      <View style={styles.iconSearch}>
        <SearchIcon />
      </View>
    </View>
  );
};

export default memo(Search);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: COLORS.LIGHT_PUPLE,
    borderRadius: 15,
    zIndex: 1,
    marginTop: 14,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    color: COLORS.WARNING,
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
