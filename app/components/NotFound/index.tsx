import { StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Image } from 'react-native';
import { Text } from '@components/common';

const NotFound = ({ marginTop = 0 }: { marginTop: number }) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Image source={require('@assets/images/notfound.png')} />
      <Text marginTop={29} weight="500" size={22} color="#696969">
        No Foods Found
      </Text>
      <Text size={13} color="#7e7e7e" marginTop={8} center>
        {`You don&apos;t save any food. Go ahead, search\nand save your favorite food`}
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