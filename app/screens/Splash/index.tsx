import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Animated, Easing, Image, StyleSheet, View } from 'react-native';

import { Text } from '@components';
import { RootScreenNavigationProps } from '@navigation';
import { LoadingImage, SplashImage } from '@themes';
import { COLORS, ROOT, SPLASH } from '@constants';

const SplashScreen = () => {
  const { navigate } =
    useNavigation<RootScreenNavigationProps<typeof SPLASH>>();
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false, // not supported in expo
      easing: Easing.inOut(Easing.ease),
    }).start(() => {
      navigate(ROOT);
    });
  }, [navigate, animation]);

  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <View style={styles.background}>
        <Image source={SplashImage} style={styles.background} />
        <Image source={LoadingImage} style={styles.logo} />
        <Text
          fontSize="xxl"
          fontWeight="800"
          color="primary"
          customStyle={{
            marginTop: 20,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
        >
          Laomica
        </Text>
        <Text
          fontWeight="500"
          fontSize="xl-6"
          customStyle={{ marginTop: 12, textAlign: 'center' }}
        >
          {`Stay Heatlthy and beatifull\nwith us!`}
        </Text>
      </View>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: COLORS.WHITE,
  },
  background: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 122,
    height: 122,
  },
});
