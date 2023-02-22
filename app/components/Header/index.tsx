import { Image, StyleSheet, View } from 'react-native';
import React, { memo } from 'react';
import { Text } from '@components/common';
import { Button } from '@components/common';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text color="black" size={23} weight="800">
        {`Want to eat\nhealthy Food?`}
      </Text>
      <Button
        width={35}
        height={35}
        borderRadius={35 / 2}
        backgroundColor="rgba(0,0,0,0.1)"
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
