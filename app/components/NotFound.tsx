import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import CustomText from './CustomText';

const NotFound = ({ marginTop = 0 }: { marginTop: number }) => {
  return (
    <View style={[styles.container, { marginTop }]}>
      <Image source={require('@assets/images/notfound.png')} />
      <CustomText marginTop={29} weight="500" size={22} color="#696969">
        No Foods Found
      </CustomText>
      <CustomText size={13} color="#7e7e7e" marginTop={8}>
        You don&apos;t save any food. Go ahead, search
      </CustomText>
      <CustomText color="#7e7e7e" size={13}>
        and save your favorite food
      </CustomText>
    </View>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
