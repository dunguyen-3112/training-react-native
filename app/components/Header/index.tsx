import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@components/common';
import { Button } from '@components/common';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text font={{ fontSize: 23, fontWeight: '800', lineHeight: 31 }}>
        {`Want to eat\nhealthy Food?`}
      </Text>
      <Button
        customStyle={{ width: 35, height: 35 }}
        borderRadius={35 / 2}
        backgroundColor="GRAY"
      >
        <Image source={require('@assets/icons/question.png')} />
      </Button>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
