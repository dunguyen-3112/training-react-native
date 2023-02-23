import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Image } from 'react-native';
import { Text } from '@components/common';

const NotFound = ({ marginTop = 0 }: { marginTop: number }) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Image source={require('@assets/images/notfound.png')} />
      <Text
        customStyle={{ marginTop: 29, color: '#696969' }}
        font={{ fontSize: 22, fontWeight: '500' }}
      >
        No Foods Found
      </Text>
      <Text
        font={{ fontSize: 13 }}
        customStyle={{ marginTop: 8, textAlign: 'center', color: '#7e7e7e' }}
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
