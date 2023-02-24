import Text from '@components/common/Text';
import React from 'react';
import { View } from 'react-native';

const NutritionalItem = ({ key, value }: { key: string; value: number }) => {
  return (
    <View>
      <Text font={{ fontSize: 16, textTransform: 'capitalize' }}>{key}</Text>
      <Text font={{ fontSize: 24 }} color="SECONDARY">
        {`${value}g`}
      </Text>
    </View>
  );
};

export default NutritionalItem;
