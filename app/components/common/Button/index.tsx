import React, { memo, ReactNode, useMemo } from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';

import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '@constants';
import { getFont } from '@helpers';

const BASE_STYLE = {
  fontSize: FONT_SIZES['ms-3'],
  fontWeight: FONT_WEIGHTS.m,
  color: COLORS.GRAY,
};

const BUTTON_TYPES = {
  primary: {
    backgroundColor: COLORS.PRIMARY,
    color: COLORS.WHITE,
    fontSize: FONT_SIZES['xxl-0'],
    fontWeight: FONT_WEIGHTS.b,
  },
  green: {
    backgroundColor: COLORS.GREEN,
    color: COLORS.WHITE,
    fontSize: FONT_SIZES.ms,
    fontWeight: FONT_WEIGHTS.b,
  },
  default: {
    backgroundColor: COLORS.LIGHT_GRAY,
    ...BASE_STYLE,
  },
  secondary: {
    backgroundColor: COLORS.SECONDARY,
    color: COLORS.WHITE,
    fontSize: FONT_SIZES['xxl-0'],
    fontWeight: FONT_WEIGHTS.b,
  },
  active: {
    backgroundColor: COLORS.LIGHT_GREEN,
    ...BASE_STYLE,
    color: COLORS.PRIMARY,
  },
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
  const { fontWeight } = TB;

  const _fontWeight = useMemo(() => getFont(fontWeight), [fontWeight]);

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
      {children ? (
        children
      ) : (
        <Text style={{ ...TB, fontWeight: _fontWeight }}>{label}</Text>
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
});
