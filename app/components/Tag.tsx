import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: '#ECECEC',
    borderRadius: 8,
  },
  text: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    color: '#5C5C5C',
  },
});
