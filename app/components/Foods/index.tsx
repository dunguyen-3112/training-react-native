import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';

import { IFood } from '@types';
import { Text } from '@components/common';
import Food from './Food';
import FoodAvatar from './FoodAvatar';

const Foods = ({
  horizontal,
  foods,
  onPressItem,
}: {
  horizontal?: boolean;
  foods: IFood[] | null;
  onPressItem?: (id: number) => void;
}) => {
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
        keyExtractor={(item) => item.id + ''}
        {...(horizontal
          ? { horizontal }
          : { ...styles.vertical, columnWrapperStyle: styles.itemStyle })}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={{ marginLeft: 18, height: 18 }} />
        )}
        renderItem={({ item }) => <Food data={item} onPress={onPressItem} />}
      />
    </View>
  );
};

export default memo(Foods);

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

export { Food, FoodAvatar };
