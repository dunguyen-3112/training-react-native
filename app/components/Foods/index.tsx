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
}: {
  horizontal?: boolean;
  foods: IFood[];
  onChange?: (foods: IFood[]) => void;
}) => {
  const navigation = useNavigation<MainScreenNavigationProps>();

  const handleMoveDetailScreen = useCallback(
    (id: number) => {
      navigation.navigate('Details', { id });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      {!horizontal && (
        <Text
          font={{ fontSize: 20, fontWeight: '700' }}
          color={'gray'}
          marginTop={22}
          marginLeft={8}
        >
          All Food
        </Text>
      )}
      <FlatList
        style={styles.list}
        data={foods}
        keyExtractor={(item) => item.id + ''}
        {...(!horizontal && {
          horizontal: true,
        })}
        {...(horizontal && {
          numColumns: 2,
          columnWrapperStyle: styles.itemStyle,
        })}
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  list: {
    width: '100%',
    marginTop: 15,
  },
  itemStyle: {
    justifyContent: 'space-between',
  },
});

export { Food, FoodAvatar };
