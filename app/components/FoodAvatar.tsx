import { StyleSheet, ImageSourcePropType, View, Image } from 'react-native';
import React, { useMemo } from 'react';
import { COLOR, COLORS } from '@constants';

type Size = 'small' | 'large';

interface FoodProps {
  imageUrl?: ImageSourcePropType | string;
  color?: COLOR;
  size?: Size;
}

const FoodAvatar = ({ imageUrl, color, size = 'small' }: FoodProps) => {
  const img = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  const [_color, blur_color] = useMemo(() => {
    switch (color) {
      case 'red':
        return [COLORS.RED_COLOR, COLORS.RED_BLUR_COLOR];
      case 'purple':
        return [COLORS.PURPLE_COLOR, COLORS.PURPLE_BLUR_COLOR];
      case 'orange':
        return [COLORS.ORANGE_COLOR, COLORS.ORANGE_BLUR_COLOR];
      case 'yellow':
        return [COLORS.YELLOW_COLOR, COLORS.YELLOW_BLUR_COLOR];
      case 'green':
        return [COLORS.GREEN_COLOR, COLORS.GREEN_BLUR_COLOR];
      case 'yellow_dark':
        return [COLORS.YELLOW_DARK_COLOR, COLORS.YELLOW_DARK_BLUR_COLOR];
      default:
        return [COLORS.RED_COLOR, COLORS.RED_BLUR_COLOR];
    }
  }, [color]);

  const [_size1, _size2, imS] =
    size === 'large'
      ? [157, 116, { width: 140, height: 110 }]
      : [92, 68, { width: 100, height: 80 }];

  return (
    <View
      style={[
        styles.layer1,
        {
          backgroundColor: blur_color,
          width: _size1,
          height: _size1,
          borderRadius: _size1 / 2,
        },
      ]}
    >
      <View
        style={[
          styles.layer2,
          {
            backgroundColor: _color,
            width: _size2,
            height: _size2,
            borderRadius: _size2 / 2,
          },
        ]}
      >
        <Image source={img} style={[styles.image, { ...imS }]} />
      </View>
    </View>
  );
};

export default FoodAvatar;

const styles = StyleSheet.create({
  layer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer2: {
    zIndex: 1,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    zIndex: 2,
    resizeMode: 'contain',
    right: -20,
    bottom: -10,
  },
});
