import { Animated, Easing, Image, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from '@components';
import { useNavigation } from '@react-navigation/native';
import { MainScreenNavigationProps } from '@navigation';
const SplashScreen = () => {
  const navigation = useNavigation<MainScreenNavigationProps>();
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
        <Text
          font={{ fontSize: 32, fontWeight: '800', textTransform: 'uppercase' }}
          color="primary"
          customStyle={{ marginTop: 20 }}
        >
          Laomica
        </Text>
        <Text
          font={{ fontSize: 16, fontWeight: '500' }}
          customStyle={{ marginTop: 12 }}
          center
        >
          {`Stay Heatlthy and beatifull with us!\nwith us!`}
        </Text>
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
