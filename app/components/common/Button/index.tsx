import { Pressable, StyleSheet, ViewStyle } from 'react-native';
import React, { memo, ReactNode, useMemo } from 'react';

import { COLORS, Font } from '@constants';
import Text, { TTextColor } from '../Text';

export type TBottonColor =
  | 'PRIMARY'
  | 'SECONDARY'
  | 'GRAY'
  | 'GREEN_DARK'
  | 'WHITE';

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
  customStyle?: ViewStyle;
}

const Button = ({
  label,
  labelColor,
  labelFont,
  children,
  backgroundColor = 'PRIMARY',
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  customStyle,
  onPress,
}: ButtonStyle) => {
  const bgColor = useMemo(() => {
    switch (backgroundColor) {
      case 'GREEN_DARK':
        return COLORS.DARK_GREEN;
      case 'SECONDARY':
        return COLORS.SECONDARY;
      case 'GRAY':
        return COLORS.LIGHT_GRAY;
      case 'WHITE':
        return COLORS.WHITE;

      default:
        return COLORS.PRIMARY;
    }
  }, [backgroundColor]);

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: bgColor,
          paddingVertical,
          paddingHorizontal,
          borderRadius,
          ...customStyle,
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
    </Pressable>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    marginLeft: 8,
  },
});
