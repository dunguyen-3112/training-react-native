import { StyleSheet, Text, View } from 'react-native';
import React, { memo, useMemo } from 'react';

import * as C from '@constants';

type size =
  | 'medium'
  | 'large'
  | 'small'
  | 10
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 20
  | 22
  | 23
  | 24;

type weight = '400' | '500' | '600' | '700' | '800';

type transform = 'uppercase' | 'lowercase' | 'none';

interface TextProps {
  text: string;
  size: size;
  weight: weight;
  color: C.COLOR;
  transform?: transform;
  lineHeight?: number;
  marginTop?: number;
}

const CustomText = ({
  text,
  size,
  weight,
  color,
  transform = 'none',
  lineHeight,
  marginTop = 0,
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
        return C.COLORS.ORANGE_COLOR;
      case 'white':
        return C.COLORS.WHITE_COLOR;
      case 'gray':
        return C.COLORS.GRAY_COLOR;
      case 'green':
        return C.COLORS.GREEN_COLOR;
      default:
        return C.COLORS.TEXT_COLOR;
    }
  }, [color]);

  return (
    <View>
      <Text
        style={[
          {
            fontWeight: weight,
            fontSize: _size,
            lineHeight: lineHeight,
            textTransform: transform,
            marginTop: marginTop,
          },
          styles.text,
          { color: _color },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default memo(CustomText);

const styles = StyleSheet.create({
  text: {
    color: C.COLORS.TEXT_COLOR,
  },
});
