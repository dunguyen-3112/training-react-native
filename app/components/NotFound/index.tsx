import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from '@components/common';
import { NotFoundImage } from '@themes/index';
import { COLORS } from '@constants';

const NotFound = ({ marginTop }: { marginTop?: number }) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Image source={NotFoundImage} style={styles.notfound} />

      <Text customStyle={styles.notfoundtext} fontSize="xxl-2" fontWeight="500">
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
  notfound: {
    width: 96,
    height: 96,
  },
  notfoundtext: {
    marginTop: 24,
    color: COLORS.LIGHT_2_GRAY,
  },
});
