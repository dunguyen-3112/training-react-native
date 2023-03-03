import { Animated, Easing, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Text } from '@components';
import { RootScreenNavigationProps } from '@navigation';
import { useNavigation } from '@react-navigation/native';
import { LoadingImage, SplashImage } from '@constants/Image';
const SplashScreen = () => {
  const navigation = useNavigation<RootScreenNavigationProps<'Splash'>>();
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false, // not supported in expo
      easing: Easing.inOut(Easing.ease),
    }).start(() => {
      //   navigation.navigate('Root');
    });
  }, [navigation, animation]);
  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <View style={styles.background}>
        <SplashImage />
        <LoadingImage />
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
    backgroundColor: '#FFFFFF',
  },
  background: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
