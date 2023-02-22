import { StyleSheet, View, Image } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@components/common';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/empty.png')} />
      <Text weight="500" size={22} marginTop={24} color="#696969">
        No Results Found
      </Text>
      <Text color="#7e7e7e" size={13} marginTop={8} center>
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
