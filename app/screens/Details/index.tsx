import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Back } from '@components';
import FoodAvatar from '@components/FoodAvatar';

const Details = () => {
  return (
    <View style={styles.container}>
      <Back left={20} />
      <View style={styles.avatar}>
        <FoodAvatar
          color="yellow_dark"
          size="large"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/burgersandwich.png?alt=media&token=1a12813a-83fd-43fa-a9de-1eee3dfb4411"
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 63,
  },
  avatar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
