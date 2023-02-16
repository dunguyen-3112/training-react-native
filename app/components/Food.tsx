import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React, { useMemo } from 'react';

import * as C from '@constants';

type Color = 'red' | 'purple' | 'orange' | 'yellow' | 'green';

interface FoodProps {
  imageUrl?: ImageSourcePropType | string;
  name: string;
  cal: number;
  weight: number;
  color?: Color;
}

const Food = ({ food }: { food: FoodProps }) => {
  const { imageUrl, name, color, cal, weight } = food;

  const img = typeof imageUrl === 'string' ? { uri: imageUrl } : imageUrl;

  const [_color, blur_color] = useMemo(() => {
    switch (color) {
      case 'red':
        return [C.COLORS.RED_COLOR, C.COLORS.RED_BLUR_COLOR];
      case 'purple':
        return [C.COLORS.PURPLE_COLOR, C.COLORS.PURPLE_BLUR_COLOR];
      case 'orange':
        return [C.COLORS.ORANGE_COLOR, C.COLORS.ORANGE_COLOR];
      case 'yellow':
        return [C.COLORS.YELLOW_COLOR, C.COLORS.YELLOW_BLUR_COLOR];
      case 'green':
        return [C.COLORS.GREEN_COLOR, C.COLORS.GREEN_BLUR_COLOR];
      default:
        return [C.COLORS.RED_COLOR, C.COLORS.RED_BLUR_COLOR];
    }
  }, [color]);

  return (
    <View style={styles.container}>
      <View style={[styles.layer1, { backgroundColor: blur_color }]}>
        <View style={[styles.layer2, { backgroundColor: _color }]}></View>
        <Image source={img} style={styles.image} />
      </View>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{`${cal} cal/${weight} kg`}</Text>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#DBDBDB',
    borderWidth: 1,
    height: 192,
    width: 154,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 17,
    paddingBottom: 18,
  },
  layer1: {
    width: 92,
    height: 92,
    borderRadius: 46,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  layer2: {
    width: 68,
    height: 68,
    zIndex: 2,
    borderRadius: 34,
  },
  image: {
    position: 'absolute',
    zIndex: 3,
    width: 100,
    height: 80,
    resizeMode: 'contain',
    right: -10,
  },
  title: {
    marginTop: 14,
    fontWeight: '700',
    fontSize: 17,
    fontFamily: 'Manrope',
  },
  desc: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Manrope',
  },
});
