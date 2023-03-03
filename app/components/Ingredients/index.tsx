import React, { memo, useCallback } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { TIngredient } from '@types';
import { Text } from '@components/common';

const Ingredients = ({ data }: { data: TIngredient[] }) => {
  const Item = ({ name, value }: TIngredient) => {
    return (
      <View style={styles.item}>
        <Text
          fontSize="xl-5"
          fontWeight="600"
          color="regular"
          customStyle={{ textTransform: 'capitalize' }}
        >
          {name}
        </Text>
        <Text fontSize="xl-5" fontWeight="600" color="regular">
          {`${value} cal`}
        </Text>
      </View>
    );
  };

  const handleRenderItem = useCallback(
    ({ item }: { item: TIngredient }) => <Item {...item} />,
    []
  );

  const handleKeyExtractor = useCallback(
    (item: TIngredient) => item.id + '',
    []
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={handleKeyExtractor}
        renderItem={handleRenderItem}
      />
    </View>
  );
};

export default memo(Ingredients);

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
