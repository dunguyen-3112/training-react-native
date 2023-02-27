import { StyleSheet, View, FlatList } from 'react-native';
import React, { memo } from 'react';
import Card from './Card';
import { IArtcile } from '@types';

const articles: IArtcile[] = [
  {
    id: 1,
    title: 'The pros and cons of fast food.',
    name: 'Article',
    color: 'PRIMARY',
    image:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/Group%2036209.png?alt=media&token=57ef4bf8-c2ec-4fb4-927d-1cf16b4bfaaa',
  },
  {
    id: 2,
    title: 'The pros and cons of vegetable',
    color: 'SECONDARY',
    name: 'Article',
    image:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/image1.png?alt=media&token=45bbf690-ea27-466c-b025-67e6fc7aed6a',
  },
];
const empty: IArtcile[] = [
  {
    id: 1,
    title: '',
    name: '',
    color: 'GRAY',
    image: '',
  },
  {
    id: 2,
    title: '',
    name: '',
    color: 'GRAY',
    image:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/image1.png?alt=media&token=45bbf690-ea27-466c-b025-67e6fc7aed6a',
  },
];
const Cards = ({ marginTop = 0 }: { marginTop?: number }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles || empty}
        keyExtractor={(item) => item.id + ''}
        showsHorizontalScrollIndicator={false}
        style={[styles.slide, marginTop ? { marginTop: marginTop } : {}]}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.item} />}
        renderItem={({ item }) => <Card {...item} />}
      />
      <View style={styles.separator}></View>
    </View>
  );
};

export default memo(Cards);

const styles = StyleSheet.create({
  container: {},
  slide: {
    height: 'auto',
    flexWrap: 'wrap',
  },
  separator: {
    height: 20,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginTop: 23,
  },
  item: {
    marginHorizontal: 16,
  },
});
