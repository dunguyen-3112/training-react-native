import React, { memo, useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Card from './Card';
import { IArtcile } from '@types';
import { MOCK_ACTICLES } from '@__mock__';

const Cards = ({ marginTop = 0 }: { marginTop?: number }) => {
  const handleItemSeparatorComponent = useCallback(
    () => <View style={styles.item} />,
    []
  );

  const handleRenderItem = useCallback(
    ({ item }: { item: IArtcile }) => <Card {...item} type={item.color} />,
    []
  );

  const handleKeyExtractor = useCallback((item: IArtcile) => item.id + '', []);

  return (
    <View style={styles.container}>
      <FlatList
        data={MOCK_ACTICLES}
        keyExtractor={handleKeyExtractor}
        renderItem={handleRenderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={handleItemSeparatorComponent}
        style={[styles.slide, marginTop ? { marginTop: marginTop } : {}]}
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

export { Card };
