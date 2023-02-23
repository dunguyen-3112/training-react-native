import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { TIngredient } from '@types';
import { Text } from '@components';

const Item = ({ name, value }: TIngredient) => {
  return (
    <View style={styles.container}>
      <Text font={{ fontWeight: '600', fontSize: 15 }} color="#7E7E7E">
        {name}
      </Text>
      <Text font={{ fontWeight: '600', fontSize: 15 }} color="#7E7E7E">
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
