import { StyleSheet, Text } from 'react-native';
import React, { memo, ReactNode, useCallback, useMemo } from 'react';
import { COLOR, COLORS } from '@constants';

type size =
  | 'medium'
  | 'large'
  | 'small'
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 20
  | 22
  | 23
  | 24
  | 32;

type weight = '400' | '500' | '600' | '700' | '800';

type transform = 'uppercase' | 'lowercase' | 'none' | 'capitalize';

interface TextProps {
  size?: size;
  weight?: weight;
  color?: COLOR | string;
  onPress?: () => void;
  transform?: transform;
  lineHeight?: number;
  marginTop?: number;
  marginLeft?: number;
  children?: ReactNode | string;
}

const CustomText = ({
  size = 'medium',
  weight = '400',
  color = 'default',
  transform = 'none',
  lineHeight,
  onPress,
  children,
  marginTop = 0,
  marginLeft = 0,
}: TextProps) => {
  const _size = useMemo(() => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'large':
        return 24;
      case 'medium':
        return 14;
      case 'small':
        return 10;
      default:
        return 12;
    }
  }, [size]);

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
        {
          fontWeight: weight,
          fontSize: _size,
          textTransform: transform,
          lineHeight,
          marginTop,
          marginLeft,
        },
        styles.text,
        { color: _color },
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
