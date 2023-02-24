import { FlatList, StyleSheet, View, ViewStyle } from 'react-native';
import React, { memo } from 'react';
import { COLOR } from '@constants';
import { TNutritional } from '@types';
import NutritionalItem from './NutritionalItem';

const Nutritional = ({
  nutritional,
  customStyles,
}: {
  nutritional: TNutritional;
  color?: COLOR;
  customStyles?: ViewStyle;
}) => {
  const vi = Object.entries(nutritional).map(([x, y]) => ({
    key1: x,
    value: y,
  }));

  return (
    <View style={[styles.container, customStyles]}>
      <FlatList
        data={vi}
        horizontal
        renderItem={({ item }) => <NutritionalItem {...item} />}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 40 }} />}
        keyExtractor={(item) => item.key1}
      />
    </View>
  );
};

export default memo(Nutritional);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8EE',
    justifyContent: 'center',
    paddingVertical: 19,
    alignItems: 'center',
  },
});
