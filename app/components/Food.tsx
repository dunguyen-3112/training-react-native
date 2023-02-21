import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { useCallback } from 'react';
import { IFood } from '@types';
import FoodAvatar from './FoodAvatar';
import CustomText from './CustomText';

const Food = ({
  food,
  size = 'medium',
  onPress,
}: {
  food: IFood;
  size?: 'medium' | 'large';
  onPress?: (id: number) => void;
}) => {
  const { name, weight, category, nutritional } = food;
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
      onPress={handlePress}
    >
      <FoodAvatar {...food} size={size} />
      <CustomText
        marginTop={13}
        size={size === 'medium' ? 17 : 22}
        weight={'700'}
      >
        {name}
      </CustomText>
      {size === 'medium' ? (
        <CustomText size={13} marginTop={size === 'medium' ? 2 : 10}>
          {`${calories} cal/${weight} kg`}
        </CustomText>
      ) : (
        <CustomText size={16}>{category.name}</CustomText>
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
    height: 192,
  },
});
