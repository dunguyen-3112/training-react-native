import { StyleSheet, View, Image } from 'react-native';
import React, { memo, useMemo } from 'react';
import { COLORS } from '@constants';
import { IFood } from '@types';

type Size = 'medium' | 'large';

const FoodAvatar = ({
  imgUrl,
  color,
  size = 'medium',
}: IFood & { size: Size }) => {
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

  const [_size1, _size2, imS] =
    size === 'large'
      ? [157, 116, { width: 140, height: 110 }]
      : [92, 68, { width: 100, height: 80 }];

  return (
    <View>
      <View
        style={[
          styles.layer1,
          {
            backgroundColor: _color,
            opacity: 0.2,
            width: _size1,
            height: _size1,
            borderRadius: _size1 / 2,
          },
        ]}
      ></View>
      <View
        style={[
          styles.layer2,
          {
            backgroundColor: _color,
            width: _size2,
            height: _size2,
            borderRadius: _size2 / 2,
            top: (_size1 - _size2) / 2,
            left: (_size1 - _size2) / 2,
          },
        ]}
      >
        <Image source={{ uri: imgUrl }} style={[styles.image, { ...imS }]} />
      </View>
    </View>
  );
};

export default memo(FoodAvatar);

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
