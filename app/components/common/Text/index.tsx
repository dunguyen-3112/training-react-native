import { StyleSheet, Text, TextStyle, ViewStyle } from 'react-native';
import React, { memo, ReactNode, useCallback, useMemo } from 'react';
import { COLOR, COLORS, Font } from '@constants';

interface TextProps {
  font?: Font;
  color?: COLOR | string;
  onPress?: () => void;
  center?: boolean;
  customStyle?: ViewStyle | TextStyle;
  children?: ReactNode | string;
}

const CustomText = ({
  font,
  color = 'default',
  center,
  onPress,
  children,
  customStyle,
}: TextProps) => {
  const { fontSize, fontWeight, textTransform } = font || {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'lowercase',
  };

  const _size = useMemo(() => {
    if (typeof fontSize === 'number') return fontSize;
    switch (fontSize) {
      case 'large':
        return 24;
      case 'medium':
        return 14;
      case 'small':
        return 10;
      default:
        return 12;
    }
  }, [fontSize]);

  const _color = useMemo(() => {
    switch (color) {
      case 'orange':
        return COLORS.ORANGE_COLOR;
      case 'white':
        return COLORS.WHITE_COLOR;
      case 'gray':
        return COLORS.GRAY_COLOR;
      case 'green':
        return COLORS.GREEN_COLOR;
      case 'default':
        return COLORS.TEXT_COLOR;
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
        styles.text,
        {
          fontWeight: fontWeight,
          fontSize: _size,
          textTransform: textTransform,
          color: _color,
          borderColor: _color,
        },
        { ...customStyle },
      ]}
    >
      {children}
    </Text>
  );
};

export default memo(CustomText);

const styles = StyleSheet.create({
  text: {
    color: COLORS.TEXT_COLOR,
  },
});
