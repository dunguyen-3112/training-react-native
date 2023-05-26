import React, { memo } from 'react';
import { StyleSheet, View } from 'react-native';

import { Text } from '@components/common';
import { NotFoundImage } from '@constants';

const NotFound = ({ marginTop }: { marginTop?: number }) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <NotFoundImage />

      <Text
        customStyle={{ marginTop: 24, color: '#696969' }}
        fontSize="xxl-2"
        fontWeight="500"
      >
        No Foods Found
      </Text>

      <Text
        fontSize="ms-3"
        color="gray"
        customStyle={{ marginTop: 8, textAlign: 'center' }}
      >
        {`You don't save any food. Go ahead, search\nand save your favorite food`}
      </Text>
    </View>
  );
};

export default memo(NotFound);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
