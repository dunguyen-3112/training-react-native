import { StyleSheet, FlatList, Text, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import Tag, { TagProps } from './base/Tag';

const tags: TagProps[] = [
  {
    id: '1',
    title: 'React',
  },
  {
    id: '2',
    title: 'Redux',
  },
  {
    id: '3',
    title: 'React Native',
  },
  {
    id: '4',
    title: 'Node',
  },
  {
    id: '5',
    title: 'Express',
  },
  {
    id: '6',
    title: 'MongoDB',
  },
  {
    id: '7',
    title: 'GraphQL',
  },
];

const Tags = ({ marginTop }: { marginTop: number }) => {
  const [tag, setTag] = useState(tags[0].id);

  const handlePressTag = useCallback((id: string) => {
    setTag(id);
  }, []);

  return (
    <View style={[styles.container, { marginTop: marginTop }]}>
      <FlatList
        data={tags}
        showsHorizontalScrollIndicator={false}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.item} />}
        keyExtractor={(item) => item.id}
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
