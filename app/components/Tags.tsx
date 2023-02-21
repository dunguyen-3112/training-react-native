import { StyleSheet, FlatList, Text, View, Alert } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import Tag, { TagProps } from './Tag';

const tags: TagProps[] = [
  {
    id: 1,
    name: 'Breakfast',
  },
  {
    id: 2,
    name: 'Dinner',
  },
  {
    id: 3,
    name: 'Dry fruits',
  },
  {
    id: 4,
    name: 'Fast Food',
  },
  {
    id: 5,
    name: 'Non-Veg',
  },
  {
    id: 6,
    name: 'Vegetables',
  },
  {
    id: 7,
    name: 'Lunch',
  },
  {
    id: 8,
    name: 'Greenish',
  },
  {
    id: 9,
    name: 'Fruits',
  },
];

const Tags = ({ marginTop }: { marginTop: number }) => {
  const [tag, setTag] = useState(tags[0].id);

  const handlePressTag = useCallback((id: number) => {
    setTag(id);
    Alert.alert(
      'Information',
      `ID: ${id}, Name: ${tags.find((tag) => tag.id === id)?.name}`
    );
  }, []);

  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <FlatList
        data={tags}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.item} />}
        keyExtractor={(item) => item.id + ''}
        renderItem={({ item }: { item: TagProps }) => (
          <Tag {...item} onPress={handlePressTag} isActive={tag === item.id} />
        )}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    height: 26,
  },
  item: {
    marginLeft: 7,
  },
});
