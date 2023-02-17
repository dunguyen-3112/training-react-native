import { StyleSheet, Text, ImageSourcePropType } from 'react-native';
import React, { useCallback } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR } from '@constants';
import FoodAvatar from './FoodAvatar';

interface FoodProps {
  id: string;
  imageUrl?: ImageSourcePropType | string;
  name: string;
  cal: number;
  weight: number;
  color?: COLOR;
}

export { FoodProps };

const Food = ({
  food,
  onPress,
}: {
  food: FoodProps;
  onPress: (id: string) => void;
}) => {
  const { name, cal, weight } = food;

  const handlePress = useCallback(() => {
    onPress && onPress(food.id);
  }, [food.id, onPress]);

  return (
    <TouchableOpacity style={styles.container} onLongPress={handlePress}>
      <FoodAvatar {...food} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.desc}>{`${cal} cal/${weight} kg`}</Text>
    </TouchableOpacity>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderColor: '#DBDBDB',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 17,
    paddingBottom: 18,
    paddingHorizontal: 27,
    paddingVertical: 17,
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
