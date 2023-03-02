import { StyleSheet, View, Image } from 'react-native';
import React, { useCallback, memo, useRef, useEffect } from 'react';

import { COLORS } from '@constants';
import { Input } from '@components/common';
import { TextInput } from 'react-native-gesture-handler';

interface SearchProps {
  value?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  isFocus?: boolean;
}

const Search = ({ value = '', onChangeText, onFocus }: SearchProps) => {
  const inputRef = useRef<TextInput>(null);

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
        ref={inputRef}
        onChangeText={handleChangeSearched}
        onFocus={onFocus}
        placeholderColor="SECONDARY"
        inputColor="BLACK"
        value={value}
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
