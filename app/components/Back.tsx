import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

interface BackProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const Back = ({ top, left, right, bottom }: BackProps) => {
  const navigation = useNavigation();

  const handlePress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Image
        source={require('@assets/icons/Back.png')}
        style={[styles.icon, { top, left, right, bottom }]}
      />
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
  },
});
