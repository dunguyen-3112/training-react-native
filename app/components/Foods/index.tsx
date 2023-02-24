import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';

import { IFood } from '@types';
import { Text } from '@components/common';
import Food from './Food';
import FoodAvatar from './FoodAvatar';
import { MainScreenNavigationProps } from '@navigation';
import { useNavigation } from '@react-navigation/native';

const Foods = ({
  horizontal,
  foods,
  onChange,
}: {
  horizontal?: boolean;
  foods: IFood[] | null;
  onChange?: (foods: IFood[]) => void;
}) => {
  const navigation = useNavigation<MainScreenNavigationProps>();

  const handleChangeItem = useCallback(
    (food: IFood) => {
      const newFoods = foods?.filter((_food) => _food.id !== food.id);
      if (newFoods) {
        newFoods.push(food);
        onChange && onChange(newFoods);
      }
    },
    [foods, onChange]
  );

  const handleMoveDetailScreen = useCallback(
    (id: number) => {
      navigation.navigate('Details', { id, onChange: handleChangeItem });
    },
    [navigation, handleChangeItem]
  );

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
          font={{ fontSize: 20, fontWeight: '700' }}
          color="DEFAULT"
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
        renderItem={({ item }) => (
          <Food data={item} onPress={handleMoveDetailScreen} />
        )}
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
