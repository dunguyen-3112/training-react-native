import { Animated, Easing, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { Text } from '@components';
import { RootScreenNavigationProps } from '@navigation';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation<RootScreenNavigationProps<'Splash'>>();
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: false, // not supported in expo
      easing: Easing.inOut(Easing.ease),
    }).start(() => {
      navigation.navigate('Root');
    });
  }, [navigation, animation]);
  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <View style={styles.background}>
        <Image
          source={require('@assets/images/pattern.png')}
          style={styles.topImage}
        />
        <Image source={require('@assets/images/loading.png')} />
        <Text
          font={{ fontSize: 32, fontWeight: '800', textTransform: 'uppercase' }}
          color="PRIMARY"
          customStyle={{ marginTop: 20 }}
        >
          Laomica
        </Text>
        <Text
          font={{ fontSize: 16, fontWeight: '500' }}
          customStyle={{ marginTop: 12 }}
          center
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
  topImage: {
    width: '100%',
    resizeMode: 'cover',
  },
});
