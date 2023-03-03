import { Text, TextStyle, ViewStyle } from 'react-native';
import React, { memo, ReactNode } from 'react';
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
  | 'green';

export const TEXT_COLOR = {
  primary: COLORS.PRIMARY,
  regular: COLORS.GRAY,
  white: COLORS.WHITE,
  secondary: COLORS.ORANGE,
  black: COLORS.BLACK,
  gray: COLORS.LIGHT_1_GRAY,
  green: COLORS.DARK_GREEN,
};

interface TextProps {
  color?: COLOR_TYPES;
  onPress?: () => void;
  textAlign?: boolean;
  fontSize?: FONT_SIZE_TYPE;
  fontWeight?: FONT_WEIGHT_TYPE;
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
        { fontSize: _fontSize, fontWeight, color: _color },
        { ...customStyle },
      ]}
    >
      {children}
    </Text>
  );
};

export default memo(CustomText);
