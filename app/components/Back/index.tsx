import React, { memo, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

interface BackProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  onPress?: () => void;
}

const Back = ({ top, left, right, bottom, onPress }: BackProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={require('@assets/icons/back.png')}
        style={[styles.icon, { top, left, right, bottom }]}
      />
    </TouchableOpacity>
  );
};

export default memo(Back);

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
  },
});
