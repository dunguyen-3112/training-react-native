import Text from '@components/common/Text';
import React from 'react';
import { View } from 'react-native';

const NutritionalItem = ({ key1, value }: { key1: string; value: number }) => {
  return (
    <View>
      <Text size={16}>{key1}</Text>
      <Text size={24} color={'orange'}>
        {`${value}g`}
      </Text>
    </View>
  );
};

export default NutritionalItem;
