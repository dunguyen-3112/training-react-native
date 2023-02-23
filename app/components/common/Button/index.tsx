import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo, ReactNode } from 'react';

import { COLOR, Font } from '@constants';
import { getColor } from '@utils';
import Text, { TTextColor } from '../Text';

export type TBottonColor = 'PRIMARY' | 'SECONDARY' | 'GREEN_DARK';

interface ButtonStyle {
  label?: string;
  labelColor?: TTextColor;
  labelFont?: Font;
  width?: number | string;
  height?: number;
  children?: ReactNode;
  backgroundColor?: TBottonColor;
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
  children,
  width,
  backgroundColor = 'PRIMARY',
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
        {
          backgroundColor: _color,
          height,
          paddingVertical,
          paddingHorizontal,
          borderRadius,
          width,
        },
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
