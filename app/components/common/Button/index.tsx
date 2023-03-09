import React, { memo, ReactNode } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import { COLORS, FONT_WEIGHTS } from '@constants';
import Text, { TextTransform } from '../Text';

export interface ButtonTransform extends TextTransform {
  backgroundColor?: string;
}

const BASE_STYLE: ButtonTransform = {
  fontSize: 'ms-3',
  fontWeight: FONT_WEIGHTS.m,
  color: 'gray',
};

const BUTTON_PRIMARY: ButtonTransform = {
  backgroundColor: COLORS.PRIMARY,
  color: 'white',
  fontSize: 'xxl-0',
  fontWeight: FONT_WEIGHTS.b,
};

const BUTTON_GREEN: ButtonTransform = {
  backgroundColor: COLORS.GREEN,
  color: 'white',
  fontSize: 'ms',
  fontWeight: FONT_WEIGHTS.b,
};

const BUTTON_SECONDARY: ButtonTransform = {
  backgroundColor: COLORS.SECONDARY,
  color: 'white',
  fontSize: 'xxl-0',
  fontWeight: FONT_WEIGHTS.b,
};

const BUTTON_ACTIVE: ButtonTransform = {
  ...BASE_STYLE,
  backgroundColor: COLORS.LIGHT_GREEN,
  color: 'primary',
};

const BUTTON_DEFAULT: ButtonTransform = {
  ...BASE_STYLE,
  backgroundColor: COLORS.LIGHT_GRAY,
};

const BUTTON_TYPES = {
  primary: BUTTON_PRIMARY,
  green: BUTTON_GREEN,
  default: BUTTON_DEFAULT,
  secondary: BUTTON_SECONDARY,
  active: BUTTON_ACTIVE,
};

export type BUTTON_TYPE =
  | 'primary'
  | 'secondary'
  | 'active'
  | 'default'
  | 'green';

export interface ButtonProps {
  label?: string;
  width?: number | string;
  type?: BUTTON_TYPE;
  height?: number;
  children?: ReactNode;
  borderRadius?: number;
  onPress?: () => void;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  customStyle?: ViewStyle;
}

const Button = ({
  label,
  type = 'default',
  children,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  customStyle,
  onPress,
}: ButtonProps) => {
  const TB = BUTTON_TYPES[type];

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          ...TB,
          paddingVertical,
          paddingHorizontal,
          borderRadius,
          ...customStyle,
        },
      ]}
    >
      {children ? children : <Text {...TB}>{label}</Text>}
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
});
