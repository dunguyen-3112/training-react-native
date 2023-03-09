import React, { memo, ReactNode } from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import {
  COLORS,
  FONT_SIZES,
  FONT_SIZE_TYPE,
  FONT_WEIGHT_TYPE,
} from '@constants';

export type COLOR_TYPES =
  | 'primary'
  | 'regular'
  | 'white'
  | 'secondary'
  | 'black'
  | 'gray'
  | 'green'
  | 'light-green'
  | 'light-gray';

export const TEXT_COLOR = {
  primary: COLORS.PRIMARY,
  regular: COLORS.GRAY,
  white: COLORS.WHITE,
  secondary: COLORS.ORANGE,
  black: COLORS.BLACK,
  gray: COLORS.LIGHT_1_GRAY,
  'light-green': COLORS.LIGHT_GREEN,
  green: COLORS.DARK_GREEN,
  'light-gray': COLORS.LIGHT_GRAY,
};

export interface TextTransform {
  color?: COLOR_TYPES;
  fontSize?: FONT_SIZE_TYPE;
  fontWeight?: FONT_WEIGHT_TYPE;
}

interface TextProps extends TextTransform {
  onPress?: () => void;
  textAlign?: boolean;
  customStyle?: ViewStyle | TextStyle;
  children?: ReactNode | string;
}

const CustomText = ({
  fontSize,
  fontWeight,
  color = 'regular',
  onPress,
  children,
  customStyle,
}: TextProps) => {
  const _fontSize = fontSize ? FONT_SIZES[fontSize] : 14;
  const _color = TEXT_COLOR[color];

  return (
    <Text
      onPress={onPress}
      style={[
        { fontSize: _fontSize, color: _color, fontWeight },
        { ...customStyle },
      ]}
    >
      {children}
    </Text>
  );
};

export default memo(CustomText);
