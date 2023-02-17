import { FlatList, StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import Food, { FoodProps } from './Food';
import CustomText from './CustomText';

const foods: FoodProps[] = [
  {
    id: '1',
    name: 'Chicken',
    weight: 400,
    cal: 500,
    color: 'red',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: '2',
    name: 'Beef',
    weight: 400,
    cal: 500,
    color: 'green',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a4.png?alt=media&token=d05ef95d-eda9-4b9e-951b-13730a7d1086',
  },
  {
    id: '3',
    name: 'Pork',
    weight: 400,
    cal: 500,
    color: 'purple',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a1.png?alt=media&token=4e7e33d8-eb6e-4fbf-8ca9-d7cca5eb001c',
  },
  {
    id: '4',
    name: 'Fish',
    weight: 400,
    cal: 500,
    color: 'yellow',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a5.png?alt=media&token=af718429-aabf-4329-91e5-439cff65e187',
  },
  {
    id: '5',
    name: 'Bacon',
    weight: 400,
    cal: 500,
    color: 'green',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a6.png?alt=media&token=e16ecdc8-e597-464d-90ce-0c6b64e0c5a8',
  },

  {
    id: '6',
    name: 'Chicken',
    weight: 400,
    cal: 500,
    color: 'red',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: '7',
    name: 'Beef',
    weight: 400,
    cal: 500,
    color: 'green',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a6.png?alt=media&token=e16ecdc8-e597-464d-90ce-0c6b64e0c5a8',
  },
  {
    id: '8',
    name: 'Pork',
    weight: 400,
    cal: 500,
    color: 'red',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: '9',
    name: 'Fish',
    weight: 400,
    cal: 500,
    color: 'orange',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: '10',
    name: 'Bacon',
    weight: 400,
    cal: 500,
    color: 'red',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
];

const Foods = ({ horizontal = false }: { horizontal?: boolean }) => {
  const navigation = useNavigation();

  const handlePressFood = useCallback(
    (id: string) => {
      navigation.navigate('Details', {
        id,
      });
    },
    [navigation]
  );

  return (
    <View style={styles.container}>
      <CustomText
        text="All Food"
        size={20}
        weight={'700'}
        color={'gray'}
        marginTop={22}
      />
      {horizontal === true ? (
        <FlatList
          style={styles.list}
          data={foods}
          keyExtractor={(item) => item.id + ''}
          columnWrapperStyle={styles.itemStyle}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 18 }} />}
          renderItem={({ item }) => (
            <Food food={item} onPress={handlePressFood} />
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
            <Food food={item} onPress={handlePressFood} />
          )}
        />
      )}
    </View>
  );
};

export default Foods;

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
    height: 'auto',
    flexWrap: 'wrap',
  },
  itemStyle: {
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
  },
  price: {
    fontSize: 20,
  },
});
