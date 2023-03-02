import { Pressable, StyleSheet } from 'react-native';
import React, { memo, useCallback, useMemo } from 'react';
import { IFood } from '@types';
import FoodAvatar from './FoodAvatar';
import { Text } from '../common';
import { COLORS } from '@constants';
import { Categories } from '@constants';

const Food = ({
  data,
  size = 'medium',
  disabled = false,
  onPress,
}: {
  data: IFood;
  size?: 'medium' | 'large';
  disabled?: boolean;
  onPress?: (id: number) => void;
}) => {
  const { name, weight, category, nutritional } = data;
  const { calories } = nutritional || { calories: {} };

  const nameSize = useMemo(() => {
    return size === 'medium' ? 17 : 22;
  }, [size]);

  const handlePress = useCallback(() => {
    onPress && onPress(data.id);
  }, [data.id, onPress]);

  return (
    <Pressable
      {...(disabled && { disabled })}
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
      <Text
        customStyle={{ marginTop: 14 }}
        font={{ fontWeight: '700', fontSize: nameSize }}
      >
        {name}
      </Text>
      {size === 'medium' ? (
        <Text font={{ fontSize: 13 }} customStyle={{ marginTop: 10 }}>
          {`${calories} cal/${weight} kg`}
        </Text>
      ) : (
        <Text font={{ fontSize: 16 }}>
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
    borderColor: '#DBDBDB',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 17,
    paddingBottom: 18,
    paddingHorizontal: 27,
    paddingVertical: 17,
    height: 192,
    width: 154,
  },
});
