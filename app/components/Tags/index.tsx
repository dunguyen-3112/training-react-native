import { StyleSheet, FlatList, View } from 'react-native';
import React, { memo, useCallback, useState } from 'react';
import Tag, { TagProps } from './Tag';
import { Categories } from '@constants';

const Tags = ({
  marginTop,
  onSelect,
}: {
  marginTop: number;
  onSelect: (id: number) => void;
}) => {
  const [tag, setTag] = useState<number>();

  const handlePressTag = useCallback(
    (id: number) => {
      onSelect(id);
      setTag(id);
    },
    [onSelect]
  );

  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <FlatList
        data={Categories}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.item} />}
        keyExtractor={(item, index) => index + ''}
        renderItem={({ item }: { item: TagProps }) => (
          <Tag {...item} onPress={handlePressTag} isActive={tag === item.id} />
        )}
      />
    </View>
  );
};

export default memo(Tags);

const styles = StyleSheet.create({
  container: {
    height: 26,
  },
  item: {
    marginLeft: 7,
  },
});
