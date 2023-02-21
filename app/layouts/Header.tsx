import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import { CustomButton } from '@components';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomText color="black" size={23} weight="800">
          Want to eat
        </CustomText>
        <CustomText color="black" size={23} weight="800">
          healthy Food?
        </CustomText>
      </View>
      <CustomButton
        width={35}
        height={35}
        borderRadius={35 / 2}
        backgroundColor="rgba(0,0,0,0.1)"
      >
        <Image source={require('@assets/icons/question.png')} />
      </CustomButton>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
});
