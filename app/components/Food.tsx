import { StyleSheet, Text, ImageSourcePropType } from 'react-native';
import React, { useCallback } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { COLOR, COLORS } from '@constants';
import FoodAvatar from './FoodAvatar';
import CustomText from './CustomText';

interface NutritionalProps {
  calories?: number;
  carbs?: number;
  fat?: number;
  protein?: number;
}

interface FoodProps {
  id: string;
  imageUrl?: ImageSourcePropType | string;
  name: string;
  nutritional: NutritionalProps;
  category?: string;
  weight: number;
  color?: COLOR;
  desc?: string;
  ingredients?: string[];
}

export { FoodProps, NutritionalProps };

const Food = ({
  food,
  size = 'medium',
  onPress,
}: {
  food: FoodProps;
  size?: 'medium' | 'large';
  onPress?: (id: string) => void;
}) => {
  const { name, weight, category = 'Food', nutritional } = food;
  const { calories } = nutritional;
  const handlePress = useCallback(() => {
    onPress && onPress(food.id);
  }, [food.id, onPress]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        size === 'medium' ? { borderWidth: 1 } : { borderWidth: 0 },
      ]}
      onLongPress={handlePress}
    >
      <FoodAvatar {...food} size={size} />
      <CustomText
        text={name}
        marginTop={13}
        size={size === 'medium' ? 17 : 22}
        weight={'700'}
      />
      {size === 'medium' ? (
        <CustomText
          text={`${calories} cal/${weight} kg`}
          size={13}
          marginTop={size === 'medium' ? 2 : 10}
        />
      ) : (
        <CustomText text={category} size={16} />
      )}
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
});
