import { Pressable, StyleSheet, Text } from 'react-native';
import React, { useCallback } from 'react';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}
const Button = ({ title, onPress }: ButtonProps) => {
  const handlePress = useCallback(() => {
    onPress && onPress();
  }, [onPress]);

  return (
    <Pressable onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#003',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
