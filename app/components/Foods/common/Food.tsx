import { StyleSheet, TouchableOpacity } from 'react-native';
import React, { memo, useCallback } from 'react';
import { IFood } from '@types';
import FoodAvatar from './FoodAvatar';
import { Text } from '@components/common';

const Food = ({
  data,
  size = 'medium',
  onPress,
}: {
  data: IFood;
  size?: 'medium' | 'large';
  onPress?: (id: number) => void;
}) => {
  console.log(16, data);
  const { name, weight, category, nutritional } = data;
  const { calories } = nutritional;
  const handlePress = useCallback(() => {
    onPress && onPress(data.id);
  }, [data.id, onPress]);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        size === 'medium'
          ? { borderWidth: 1 }
          : {
              borderWidth: 0,
              height: 'auto',
            },
      ]}
      onPress={handlePress}
    >
      <FoodAvatar {...data} size={size} />
      <Text marginTop={14} size={size === 'medium' ? 17 : 22} weight={'700'}>
        {name}
      </Text>
      {size === 'medium' ? (
        <Text size={13} marginTop={10}>
          {`${calories} cal/${weight} kg`}
        </Text>
      ) : (
        <Text marginTop={0} size={16}>
          {category.name}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default memo(Food);

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
