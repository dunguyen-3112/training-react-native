import React, { memo, useMemo } from 'react';
import { StyleSheet, View, Image } from 'react-native';

import { COLORS } from '@constants';
import { IFood } from '@types';

type Size = 'medium' | 'large';

const TYPE_STYLES = {
  medium: {
    layer1: 92,
    layer2: 68,
    image: {
      width: 100,
      height: 80,
    },
  },
  large: {
    layer1: 157,
    layer2: 116,
    image: {
      width: 140,
      height: 110,
    },
  },
};

const FoodImage = ({
  imgUrl,
  color,
  type = 'medium',
}: IFood & { type: Size }) => {
  const _color = useMemo(() => {
    switch (color) {
      case 'RED':
        return COLORS.RED;
      case 'PURPLE':
        return COLORS.PURPLE;
      case 'ORANGE':
        return COLORS.ORANGE;
      case 'YELLOW':
        return COLORS.YELLOW;
      case 'GREEN':
        return COLORS.GREEN;
      case 'PRIMARY':
        return COLORS.PRIMARY;
    }
  }, [color]);

  const { layer2, image, layer1 } = TYPE_STYLES[type];

  return (
    <View>
      <View
        style={[
          styles.layer1,
          {
            backgroundColor: _color,
            opacity: 0.2,
            height: layer1,
            width: layer1,
            borderRadius: layer1 / 2,
          },
        ]}
      ></View>
      <View
        style={[
          styles.layer2,
          {
            backgroundColor: _color,
            width: layer2,
            height: layer2,
            borderRadius: layer2 / 2,
            top: (layer1 - layer2) / 2,
            left: (layer1 - layer2) / 2,
          },
        ]}
      >
        <Image source={{ uri: imgUrl }} style={[styles.image, { ...image }]} />
      </View>
    </View>
  );
};

export default memo(FoodImage);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 1,
  },
  layer1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer2: {
    zIndex: 1,
    position: 'absolute',
  },
  image: {
    position: 'absolute',
    zIndex: 2,
    resizeMode: 'contain',
    right: -20,
    bottom: -10,
  },
});
