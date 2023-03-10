import { StyleSheet, View, Animated, Easing, Image } from 'react-native';
import React, { memo } from 'react';
import { LoadingImage } from '@themes/index';

const Loading = ({ marginTop }: { marginTop?: number }) => {
  const rotation = new Animated.Value(0);

  Animated.loop(
    Animated.timing(rotation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
      easing: Easing.linear,
    })
  ).start();

  const spin = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[styles.container, { marginTop }]}>
      <Animated.View style={{ transform: [{ rotate: spin }] }}>
        <Image source={LoadingImage} style={styles.loading} />
      </Animated.View>
    </View>
  );
};

export default memo(Loading);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loading: {
    width: 122,
    height: 122,
  },
});
