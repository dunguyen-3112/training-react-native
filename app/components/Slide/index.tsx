import { StyleSheet, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Artcile from './base/ArtcileType';
import SlideItem from './base/SlideItem';

const Slide = ({ marginTop = 0 }: { marginTop?: number }) => {
  const articles: Artcile[] = [
    {
      id: '1',
      name: 'The pros and cons of fast food.',
      color: 'green',
      image:
        'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/Group%2036209.png?alt=media&token=57ef4bf8-c2ec-4fb4-927d-1cf16b4bfaaa',
    },
    {
      id: '2',
      name: 'The pros and cons of vegetable',
      color: 'orange',
      image:
        'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/image1.png?alt=media&token=45bbf690-ea27-466c-b025-67e6fc7aed6a',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={[styles.slide, marginTop ? { marginTop: marginTop } : {}]}
        horizontal
        ItemSeparatorComponent={() => <View style={styles.item} />}
        renderItem={({ item }) => (
          <SlideItem
            color={item.color}
            title={item.name}
            image={{ uri: item.image }}
          />
        )}
      />
    </View>
  );
};

export default Slide;

const styles = StyleSheet.create({
  container: {},
  slide: {
    height: 'auto',
    flexWrap: 'wrap',
  },
  item: {
    marginHorizontal: 16,
  },
});
