import { Pressable, StyleSheet } from 'react-native';
import React, { memo, useCallback } from 'react';
import { IFood } from '@types';
import FoodAvatar from './FoodAvatar';
import { Text } from '../common';
import { COLORS } from '@constants';
import { Categories } from '@constants';

type FOOD_TYPES = 'medium' | 'large';

const FOOD_STYLE = {
  medium: {
    title: {
      fontSize: 17,
      fontWeight: '700',
    },
    subtitle: {
      fontSize: 13,
      fontWeight: '400',
    },
  },
  large: {
    title: {
      fontSize: 22,
      fontWeight: '700',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: '400',
    },
  },
};

const Food = ({
  data,
  type = 'medium',
  disabled = false,
  onPress,
}: {
  data: IFood;
  type?: FOOD_TYPES;
  disabled?: boolean;
  onPress?: (id: number) => void;
}) => {
  const { name, weight, category, nutritional } = data;
  const { calories } = nutritional || { calories: {} };

  const handlePress = useCallback(() => {
    onPress && onPress(data.id);
  }, [data.id, onPress]);

  const { subtitle, title } = FOOD_STYLE[type];

  return (
    <Pressable
      {...(disabled && { disabled })}
      style={[styles.container, styles[type]]}
      onPress={handlePress}
    >
      <FoodAvatar {...data} size={type} />
      <Text customStyle={{ marginTop: 14, ...title }}>{name}</Text>
      {type === 'medium' ? (
        <Text customStyle={{ marginTop: 10, ...subtitle }}>
          {`${calories} cal/${weight} kg`}
        </Text>
      ) : (
        <Text customStyle={{ marginTop: 0, ...subtitle }}>
          {Categories.find(({ id }) => id === category)?.name}
        </Text>
      )}
    </Pressable>
  );
};

export default memo(Food);

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 17,
    paddingBottom: 18,
    paddingHorizontal: 27,
    paddingVertical: 17,
  },
  medium: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    height: 192,
    width: 154,
  },
  large: {},
});
