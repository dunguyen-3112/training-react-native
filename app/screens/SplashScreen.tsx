import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { CustomText } from '@components';
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 3000,
      useNativeDriver: true,
      easing: Easing.inOut(Easing.ease),
    }).start(() => {
      navigation.navigate('Main');
    });
  }, [navigation, animation]);
  return (
    <Animated.View style={[styles.container, { opacity: animation }]}>
      <LinearGradient
        colors={['#FFFFFF', 'rgba(255,255,255,1)']}
        start={[0, 0.5]}
        end={[1, 0.5]}
        style={styles.background}
      >
        <Image
          source={require('@assets/images/pattern.png')}
          style={styles.topImage}
        />
        <Image source={require('@assets/images/loading.png')} />
        <CustomText
          size={32}
          weight="800"
          color="#91C788"
          transform="uppercase"
          marginTop={20}
        >
          Laomica
        </CustomText>
        <CustomText weight="500" size={16} marginTop={12}>
          Stay Heatlthy and beatifull with us!
        </CustomText>
        <CustomText weight="500" size={16}>
          with us!
        </CustomText>
      </LinearGradient>
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
