import Text from '@components/common/Text';
import React from 'react';
import { View } from 'react-native';

const NutritionalItem = ({ key1, value }: { key1: string; value: number }) => {
  return (
    <View>
      <Text font={{ fontSize: 16, textTransform: 'capitalize' }}>{key1}</Text>
      <Text font={{ fontSize: 24 }} color={'orange'}>
        {`${value}g`}
      </Text>
    </View>
  );
};

export default NutritionalItem;
