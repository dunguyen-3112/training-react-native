import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';

interface FoodProps {
  image?: ImageSourcePropType | string;
  name: string;
  cal: number;
  weight: number;
}

const Food = ({ image, name, cal, weight }: FoodProps) => {
  const img = typeof image === 'string' ? { uri: image } : image;
  //   image = require('@assets/images/a1.png');
  return (
    <View style={styles.container}>
      <View style={styles.layer1}>
        <View style={styles.layer2}></View>
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
    backgroundColor: 'rgba(144, 89, 167, 0.2);',
    position: 'relative',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  layer2: {
    width: 68,
    height: 68,
    position: 'absolute',
    zIndex: 2,
    borderRadius: 34,
    backgroundColor: 'rgba(144, 89, 167, 1);',
  },
  image: {
    position: 'absolute',
    top: 34,
    bottom: 7,
    right: -9,
    left: 16,
    zIndex: 3,
    resizeMode: 'contain',
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
