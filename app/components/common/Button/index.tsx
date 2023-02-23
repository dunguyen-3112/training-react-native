import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo, ReactNode } from 'react';

import { COLOR, Font } from '@constants';
import { getColor } from '@utils';
import Text from '../Text';

interface ButtonStyle {
  label?: string;
  labelColor?: COLOR;
  labelFont?: Font;
  width?: number | string;
  height?: number;
  children?: ReactNode;
  backgroundColor?: COLOR | string;
  borderRadius?: number;
  onPress?: () => void;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}

const Button = ({
  label,
  labelColor,
  labelFont,
  marginTop = 0,
  children,
  width,
  backgroundColor = 'green',
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  onPress,
  height,
}: ButtonStyle) => {
  const _color = getColor(backgroundColor);

  return (
    <TouchableOpacity
      onPress={onPress}
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
      {children ? (
        children
      ) : (
        <Text {...(labelFont && { font: labelFont })} color={labelColor}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Button);

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
