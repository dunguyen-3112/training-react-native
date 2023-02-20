import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { ReactNode } from 'react';

import { COLOR } from '@constants';
import { getColor } from '@utils';

interface ButtonStyle {
  width?: number | string;
  height?: number;
  children?: ReactNode;
  backgroundColor?: COLOR | string;
  borderRadius?: number;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const CustomButton = ({
  marginTop = 0,
  children,
  width,
  backgroundColor = 'green',
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  height,
}: ButtonStyle) => {
  const _color = getColor(backgroundColor);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: _color, marginTop: marginTop },
        width ? { width } : {},
        height ? { height } : { alignSelf: 'flex-start' },
        borderRadius ? { borderRadius } : {},
        paddingVertical ? { paddingVertical } : {},
        paddingHorizontal ? { paddingHorizontal } : {},
      ]}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 8,
  },
});
