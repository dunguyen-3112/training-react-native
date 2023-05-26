import React, { useCallback } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { IFood } from '@types';
import { Text } from '@components/common';
import Food from './Food';
import FoodImage from './FoodImage';

export interface FoodsProps {
  foods: IFood[] | null;
  onPressItem?: (id: number) => void;
}

const Foods = ({
  horizontal,
  foods,
  onPressItem,
}: FoodsProps & { horizontal?: boolean }) => {
  const handleItemSeparatorComponent = useCallback(
    () => <View style={{ marginLeft: 18, height: 18 }} />,
    []
  );

  const handleRenderItem = useCallback(
    ({ item }: { item: IFood }) => <Food data={item} onPress={onPressItem} />,
    [onPressItem]
  );

  const handleKeyExtractor = useCallback((item: IFood) => item.id + '', []);

  return (
    <View
      style={[
        styles.container,
        {
          ...(!horizontal && { alignItems: 'center' }),
        },
      ]}
    >
      {horizontal && (
        <Text
          fontSize="xxl-0"
          fontWeight="700"
          customStyle={{ marginTop: 22, marginLeft: 8 }}
        >
          All Food
        </Text>
      )}
      <FlatList
        style={styles.list}
        data={foods}
        keyExtractor={handleKeyExtractor}
        renderItem={handleRenderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={handleItemSeparatorComponent}
        {...(horizontal
          ? { horizontal }
          : { ...styles.vertical, columnWrapperStyle: styles.itemStyle })}
      />
    </View>
  );
};

const FoodsVertical = (props: FoodsProps) => <Foods {...props} />;
const FoodsHorizontal = (props: FoodsProps) => <Foods {...props} horizontal />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  list: {
    marginTop: 15,
  },
  vertical: {
    numColumns: 2,
    width: 326,
    justifyContent: 'space-between',
  },
  horizontal: {},
  itemStyle: {
    justifyContent: 'space-between',
  },
});

export { Food, FoodImage, FoodsVertical, FoodsHorizontal };
