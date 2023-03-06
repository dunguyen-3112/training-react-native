import { StyleSheet, FlatList, View } from 'react-native';
import React, { memo, useCallback, useState } from 'react';

import { COLORS } from '@constants';
import { ICategory } from '@types';
import { Button } from '@components/common';
import { CATEGORIES } from '@constants';

export interface ICategories {
  marginTop?: number;
  onSelect?: (id: number) => void;
}

const Categories = ({ marginTop, onSelect }: ICategories) => {
  const [tag, setTag] = useState<number>();

  const handlePressTag = useCallback(
    (id: number) => {
      onSelect && onSelect(id);
      setTag(id);
    },
    [onSelect]
  );

  const handleItemSeparatorComponent = useCallback(
    () => <View style={styles.item} />,
    []
  );

  //   <Tag {...item} onPress={handlePressTag} isActive={tag === item.id} />
  const handleKeyExtractor = useCallback((item: ICategory) => item.id + '', []);
  const handleRenderItem = useCallback(
    ({ item }: { item: ICategory }) => {
      const { id, name } = item;

      return (
        <Button
          label={name}
          type={id === tag ? 'active' : 'default'}
          customStyle={{
            ...styles.tag,
            ...(id === tag && { ...styles.active }),
          }}
          onPress={() => handlePressTag(id)}
        />
      );
    },
    [handlePressTag, tag]
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
