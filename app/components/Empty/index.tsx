import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';

import { Text } from '@components/common';
import { EmptyImage } from '@themes/index';
import { COLORS } from '@constants';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Image source={EmptyImage} style={styles.empty} />

      <Text fontSize="xxl-2" fontWeight="500" customStyle={styles.emptytext}>
        No Results Found
      </Text>

      <Text
        color="gray"
        fontSize="ms-3"
        customStyle={{ marginTop: 8, textAlign: 'center' }}
      >
        {`Try search for a different keywork or\n tweek your search a little`}
      </Text>
    </View>
  );
};

export default memo(Empty);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    paddingTop: 122,
  },
  empty: {
    width: 108,
    height: 96,
  },
  emptytext: {
    marginTop: 24,
    color: COLORS.LIGHT_2_GRAY,
  },
});
