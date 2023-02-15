import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

interface TagProps {
  title: string;
}

const Tag = ({ title }: TagProps) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Tag;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: '#ECEDEC',
    borderRadius: 8,
  },
});
