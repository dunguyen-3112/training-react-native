import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { TIngredient } from '@types';
import { Text } from '../common';

const Item = ({ name, value }: TIngredient) => {
  return (
    <View style={styles.container}>
      <Text fontSize="xl-5" fontWeight="b" color="GRAY">
        {name}
      </Text>
      <Text fontSize="xl-5" fontWeight="b" color="GRAY">
        {`${value} cal`}
      </Text>
    </View>
  );
};

export default memo(Item);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
});
