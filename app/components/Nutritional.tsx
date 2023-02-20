import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NutritionalProps } from './Food';
import { COLOR } from '@constants';
import CustomText from './CustomText';

const Nutritional = ({
  nutritional,
  color,
  marginTop = 0,
}: {
  nutritional: NutritionalProps;
  color: COLOR;
  marginTop?: number;
}) => {
  const vi = Object.entries(nutritional).map(([x, y]) => ({
    key1: x,
    value: y,
  }));

  console.log(vi);

  return (
    <View style={[styles.container, { marginTop }]}>
      <FlatList
        data={vi}
        horizontal
        renderItem={({ item }) => <NutritionalItem {...item} />}
        ItemSeparatorComponent={() => <View style={{ marginLeft: 40 }} />}
        keyExtractor={(item) => item.key1}
      />
    </View>
  );
};

const NutritionalItem = ({ key1, value }: { key1: string; value: number }) => {
  return (
    <View>
      <CustomText text={key1} size={16} />
      <CustomText text={`${value}g`} size={24} color={'orange'} />
    </View>
  );
};

export default Nutritional;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8EE',
    justifyContent: 'center',
    paddingVertical: 19,
    alignItems: 'center',
  },
});
