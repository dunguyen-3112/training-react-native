import React, { memo, useCallback, useState, useMemo } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import { TIngredient } from '@types';
import { Text } from '@components/common';

const Ingredients = ({ data }: { data: TIngredient[] }) => {
  const [isAll, setIsAll] = useState(false);

  const ingrediants = useMemo(() => {
    if (data) {
      if (data) {
        const ingrediants = Object.values(data);
        return isAll ? ingrediants : ingrediants.slice(0, 2);
      }
    }
  }, [data, isAll]);
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

  const handleSeeAll = useCallback(() => {
    setIsAll((prev) => !prev);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.ingrediant}>
        <View style={styles.ingrediantHeader}>
          <Text fontSize="xxl-0" fontWeight="600">
            Ingrediants
          </Text>
          <Text
            fontSize="ms-1"
            fontWeight="500"
            color="primary"
            onPress={handleSeeAll}
          >
            {isAll ? 'See less' : 'See All'}
          </Text>
        </View>
        <View></View>
      </View>
      <FlatList
        data={ingrediants}
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
  ingrediant: {
    marginTop: 20,
  },
  ingrediantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
