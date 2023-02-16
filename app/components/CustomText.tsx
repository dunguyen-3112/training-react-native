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

type COLOR = 'white' | 'black' | 'orange' | 'green';

type weight = '400' | '500' | '600' | '800';

interface TextProps {
  text: string;
  size: size;
  weight: weight;
  color: COLOR;
}

const CustomText = ({ text, size, weight, color }: TextProps) => {
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
      case 'black':
      default:
        return C.COLORS.TEXT_COLOR;
    }
  }, [color]);

  return (
    <View>
      <Text
        style={[
          { fontWeight: weight, fontSize: _size },
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
