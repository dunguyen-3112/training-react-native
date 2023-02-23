import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo, useCallback } from 'react';
import { Categories, COLORS } from '@constants';
import { ICategory } from '@types';
import { Text } from '@components/common';

interface TagProps extends ICategory {
  isActive?: boolean;
  onPress?: (id: number) => void;
}

export { TagProps };

const Tag = ({ id, isActive, onPress }: TagProps) => {
  const handlePress = useCallback(() => {
    onPress && onPress(id);
  }, [id, onPress]);

  return (
    <Text
      onPress={handlePress}
      font={{ fontSize: 13 }}
      customStyle={styles.tag}
      {...(isActive && { color: COLORS.GREEN_COLOR })}
    >
      {Categories.find((c) => c.id === id)?.name}
    </Text>
  );
};

export default memo(Tag);

const styles = StyleSheet.create({
  tag: {
    backgroundColor: '#ECEDEC',
    borderRadius: 8,
    maxHeight: 26,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: COLORS.GREEN_BLUR_COLOR,
    borderColor: COLORS.GREEN_COLOR,
    borderWidth: 1,
  },
});
