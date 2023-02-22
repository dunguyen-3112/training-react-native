import { StyleSheet, Text, View, Image } from 'react-native';
import React, { memo } from 'react';
import CustomText from './CustomText';

const Empty = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@assets/images/empty.png')} />
      <CustomText
        text="No Results Found"
        weight="500"
        size={22}
        marginTop={24}
        color="#696969"
      />
      <CustomText color="#7e7e7e" size={13} marginTop={8}>
        Try search for a different keywork or
      </CustomText>
      <CustomText color="#7e7e7e" size={13}>
        tweek your search a little
      </CustomText>
    </View>
  );
};

export default memo(Empty);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 122,
  },
});
