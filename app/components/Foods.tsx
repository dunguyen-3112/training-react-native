import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import Food from './Food';

const foods = [
  {
    id: 1,
    name: 'Chicken',
    weight: 400,
    cal: 500,
    color: 'purple',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 2,
    name: 'Beef',
    weight: 400,
    cal: 500,
    color: 'yellow',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 3,
    name: 'Pork',
    weight: 400,
    cal: 500,
    color: 'red',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 4,
    name: 'Fish',
    weight: 400,
    cal: 500,
    color: 'orange',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 5,
    name: 'Bacon',
    weight: 400,
    cal: 500,
    color: 'green',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },

  {
    id: 6,
    name: 'Chicken',
    weight: 400,
    cal: 500,
    color: 'purple',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 7,
    name: 'Beef',
    weight: 400,
    cal: 500,
    color: 'yellow',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 8,
    name: 'Pork',
    weight: 400,
    cal: 500,
    color: 'red',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 9,
    name: 'Fish',
    weight: 400,
    cal: 500,
    color: 'orange',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
  {
    id: 10,
    name: 'Bacon',
    weight: 400,
    cal: 500,
    color: 'green',
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/a2.png?alt=media&token=abe65f60-e23e-48d9-a2c8-13c9e3ccb921',
  },
];

const ItemSeparatorComponent = () => <View style={{ height: 18 }} />;

const Foods = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={foods}
        keyExtractor={(item) => item.id + ''}
        columnWrapperStyle={styles.itemStyle}
        numColumns={2}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={({ item }) => <Food food={item} />}
      />
    </View>
  );
};

export default Foods;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  list: {
    width: '100%',
    paddingHorizontal: 24,
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
