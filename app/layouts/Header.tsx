import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../components/CustomText';
import HelpButton from '../components/HelpButton';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomText text="Want to eat" color="black" size={23} weight="800" />
        <CustomText text="healthy Food?" color="black" size={23} weight="800" />
      </View>
      <HelpButton />
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
