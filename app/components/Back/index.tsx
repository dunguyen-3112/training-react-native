import { useNavigation } from '@react-navigation/native';
import { BackIcon } from '@themes';
import React, { memo } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

interface BackProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

const Back = ({ top, left, right, bottom }: BackProps) => {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity onPress={goBack}>
      <Image
        source={BackIcon}
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
