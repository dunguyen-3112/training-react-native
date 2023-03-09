import React, { memo, ReactNode } from 'react';
import { Text, TextStyle, ViewStyle } from 'react-native';
import {
  COLORS,
  FONT_SIZES,
  FONT_SIZE_TYPE,
  FONT_WEIGHT_TYPE,
} from '@constants';
import { getFont } from '@helpers';

export type COLOR_TYPES =
  | 'primary'
  | 'regular'
  | 'white'
  | 'secondary'
  | 'black'
  | 'gray'
  | 'light-green'
  | 'green';

export interface TEXT_TRANSFORM {
  fontSize?: FONT_SIZE_TYPE;
  fontWeight?: FONT_WEIGHT_TYPE;
  color?: COLOR_TYPES;
}

export const TEXT_COLOR = {
  primary: COLORS.PRIMARY,
  regular: COLORS.GRAY,
  white: COLORS.WHITE,
  secondary: COLORS.ORANGE,
  black: COLORS.BLACK,
  gray: COLORS.LIGHT_1_GRAY,
  green: COLORS.DARK_GREEN,
  'light-green': COLORS.LIGHT_GREEN,
};

interface TextProps extends TEXT_TRANSFORM {
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
  const _fontWeight = fontWeight ? getFont(fontWeight) : '400';

  return (
    <Text
      onPress={onPress}
      style={[
        { fontSize: _fontSize, fontWeight: _fontWeight, color: _color },
        { ...customStyle },
      ]}
    >
      {children}
    </Text>
  );
};

export default memo(CustomText);
