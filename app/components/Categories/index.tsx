import { StyleSheet, FlatList, View } from 'react-native';
import React, { memo, useCallback } from 'react';

import { COLORS } from '@constants';
import { ICategory } from '@types';
import { Button } from '@components/common';
import { CATEGORIES } from '@constants';

export interface ICategories {
  marginTop?: number;
  selects: number[];
  onSelect?: (ids: number[]) => void;
}

const Categories = ({ marginTop, onSelect, selects }: ICategories) => {
  const handlePressTag = useCallback(
    (id: number) => {
      let newTags;
      if (selects) {
        if (selects.includes(id))
          newTags = selects.filter((item) => item !== id);
        else newTags = [...selects, id];
      } else newTags = [id];
      onSelect && onSelect(newTags);
    },
    [onSelect, selects]
  );

  const handleItemSeparatorComponent = useCallback(
    () => <View style={styles.item} />,
    []
  );

  const handleKeyExtractor = useCallback((item: ICategory) => item.id + '', []);

  const handleRenderItem = useCallback(
    ({ item }: { item: ICategory }) => {
      const { id, name } = item;

      const isActive = selects.includes(id);

      return (
        <Button
          label={name}
          type={isActive ? 'active' : 'default'}
          customStyle={{
            ...styles.tag,
            ...(isActive && { ...styles.active }),
          }}
          onPress={() => handlePressTag(id)}
        />
      );
    },
    [handlePressTag, selects]
  );

  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <FlatList
        data={CATEGORIES}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={handleItemSeparatorComponent}
        keyExtractor={handleKeyExtractor}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

export default memo(Categories);

const styles = StyleSheet.create({
  container: {
    height: 26,
  },
  item: {
    marginLeft: 7,
  },
  tag: {
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  active: {
    backgroundColor: 'rgba(28, 195, 121, 0.1)',
    borderWidth: 1,
    borderColor: COLORS.GREEN,
  },
});
