import { StyleSheet, FlatList, View } from 'react-native';
import React, { memo, useCallback, useState } from 'react';

import { COLORS } from '@constants';
import { ICategory } from '@types';
import { Button } from '@components/common';
import { CATEGORIES } from '@constants';

export interface ICategories {
  marginTop?: number;
  onSelect?: (ids: number[]) => void;
}

const Categories = ({ marginTop, onSelect }: ICategories) => {
  const [tags, setTags] = useState<number[]>([]);

  const handlePressTag = useCallback(
    (id: number) => {
      let newTags;
      if (tags.includes(id)) newTags = tags.filter((item) => item !== id);
      else newTags = [...tags, id];
      onSelect && onSelect(newTags);
      setTags(newTags);
    },
    [onSelect, tags]
  );

  const handleItemSeparatorComponent = useCallback(
    () => <View style={styles.item} />,
    []
  );

  const handleKeyExtractor = useCallback((item: ICategory) => item.id + '', []);

  const handleRenderItem = useCallback(
    ({ item }: { item: ICategory }) => {
      const { id, name } = item;

      const isActive = tags.includes(id);

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
    [handlePressTag, tags]
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
