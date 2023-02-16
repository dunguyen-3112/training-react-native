import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const HelpButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('@assets/icons/question.png')} />
    </TouchableOpacity>
  );
};

export default HelpButton;

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 17,
    backgroundColor: 'rgba(0,0,0,.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
