import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { TIngredient } from '@types';
import Item from './Item';

const index = ({ data }: { data: TIngredient[] }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id + index + ''}
        renderItem={({ item }) => <Item {...item} />}
      />
    </View>
  );
};

export default memo(index);

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
});