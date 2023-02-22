import { FlatList, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { COLOR } from '@constants';
import CustomText from './CustomText';
import { TNutritional } from '@types';

const Nutritional = ({
  nutritional,
  marginTop = 0,
}: {
  nutritional: TNutritional;
  color: COLOR;
  marginTop?: number;
}) => {
  const vi = Object.entries(nutritional).map(([x, y]) => ({
    key1: x,
    value: y,
  }));

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
      <CustomText size={16}>{key1}</CustomText>
      <CustomText size={24} color={'orange'}>
        {`${value}g`}
      </CustomText>
    </View>
  );
};

export default memo(Nutritional);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF8EE',
    justifyContent: 'center',
    paddingVertical: 19,
    alignItems: 'center',
  },
});
