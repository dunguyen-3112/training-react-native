import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@components/common';
import { EmptyImage } from '@constants/Image';

const Empty = () => {
  return (
    <View style={styles.container}>
      <EmptyImage />
      <Text
        fontSize="xxl-2"
        fontWeight="500"
        customStyle={{ marginTop: 24, color: '#696969' }}
      >
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
    backgroundColor: '#fff',
    paddingTop: 122,
  },
});
