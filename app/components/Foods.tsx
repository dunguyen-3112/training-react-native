import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Food from './Food';
import CustomText from './CustomText';
import { IFood } from '@types';

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
        <CustomText
          size={20}
          weight={'700'}
          color={'gray'}
          marginTop={22}
          marginLeft={8}
        >
          All Food
        </CustomText>
      )}
      {horizontal ? (
        <FlatList
          style={styles.list}
          data={foods}
          keyExtractor={(item) => item.id + ''}
          columnWrapperStyle={styles.itemStyle}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
          renderItem={({ item }) => (
            <Food data={item} onPress={handlePressFood} />
          )}
        />
      ) : (
        <FlatList
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          data={foods}
          horizontal
          keyExtractor={(item) => item.id + ''}
          ItemSeparatorComponent={() => <View style={{ marginRight: 18 }} />}
          renderItem={({ item }) => (
            <Food data={item} onPress={handlePressFood} />
          )}
        />
      )}
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
