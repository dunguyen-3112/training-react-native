import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import { IFood } from '@types';
import { Text } from '@components/common';
import { Food, FoodAvatar } from './common';

export { Food, FoodAvatar };

const Foods = ({
  horizontal,
  foods,
}: {
  horizontal?: boolean;
  foods: IFood[];
}) => {
  const navigation = useNavigation();

  const handlePressFood = useCallback(
    (id: number) => {
      navigation.navigate('Details', {
        id,
      });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      {!horizontal && (
        <Text
          size={20}
          weight={'700'}
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
        ItemSeparatorComponent={() => (
          <View style={{ height: 18, marginLeft: 18 }} />
        )}
        renderItem={({ item }) => (
          <Food data={item} onPress={handlePressFood} />
        )}
      />
    </View>
  );
};

export default memo(Foods);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 4,
    backgroundColor: '#FFFFFF',
  },
  list: {
    width: '100%',
    marginTop: 15,
  },
  itemStyle: {
    justifyContent: 'space-evenly',
  },
});
