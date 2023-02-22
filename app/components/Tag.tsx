import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { memo, useCallback } from 'react';
import { COLORS } from '@constants';
import { Categories, IInfo } from '@types';

interface TagProps extends IInfo {
  isActive?: boolean;
  name: Categories;
  onPress?: (id: number) => void;
}

export { TagProps };

const Tag = ({ name, id, isActive, onPress }: TagProps) => {
  const handlePress = useCallback(() => {
    onPress && onPress(id);
  }, [id, onPress]);

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.container, isActive ? styles.active : {}]}
    >
      <Text
        style={[styles.title, isActive ? { color: COLORS.GREEN_COLOR } : {}]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default memo(Tag);

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#ECEDEC',
    borderRadius: 8,
    maxHeight: 26,
  },
  title: {
    fontFamily: 'Manrope',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 18,
    color: '#5C5C5C',
  },
  active: {
    backgroundColor: COLORS.GREEN_BLUR_COLOR,
    borderColor: COLORS.GREEN_COLOR,
    borderWidth: 1,
  },
});
