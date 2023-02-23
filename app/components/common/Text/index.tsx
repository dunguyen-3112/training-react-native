import { Text, TextStyle, ViewStyle } from 'react-native';
import React, { memo, ReactNode, useCallback, useMemo } from 'react';
import { COLORS, COLORS1, Font } from '@constants';

export type TTextColor = 'DEFAULT' | 'PRIMATY' | 'WHITE';
interface TextProps {
  font?: Font;
  color?: TTextColor;
  onPress?: () => void;
  center?: boolean;
  customStyle?: ViewStyle | TextStyle;
  children?: ReactNode | string;
}

const CustomText = ({
  font,
  color = 'DEFAULT',
  center,
  onPress,
  children,
  customStyle,
}: TextProps) => {
  let { fontSize = 14 } = font || {};

  const { fontWeight = '400', textTransform = 'none' } = font || {};

  fontSize = useMemo(() => {
    if (typeof fontSize === 'number') return fontSize;
    switch (fontSize) {
      case 'large':
        return 24;
      case 'medium':
        return 16;
      case 'small':
        return 10;
    }
  }, [fontSize]);

  const codeColor = useMemo(() => {
    switch (color) {
      case 'PRIMATY':
        return COLORS1.PRIMARY_COLOR;
      case 'DEFAULT':
        return COLORS1.GRAY_COLOR;
      case 'WHITE':
        return COLORS1.WHITE_COLOR;
      default:
        return color;
    }
  }, [color]);

  const handlePress = useCallback(() => {
    if (onPress) onPress();
  }, [onPress]);

  return (
    <Text
      onPress={handlePress}
      style={[
        {
          fontWeight,
          fontSize,
          textTransform,
          color: codeColor,
          borderColor: codeColor,
        },
        center && { textAlign: 'center' },
        { ...customStyle },
      ]}
    >
      {children}
    </Text>
  );
};

export default memo(CustomText);
