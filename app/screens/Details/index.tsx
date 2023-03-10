import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { RootScreenNavigationProps, RootStackParamsList } from '@navigation';
import { useFood } from '@hooks';
import {
  Back,
  Button,
  Food,
  Ingredients,
  Loading,
  Nutritional,
  Text,
} from '@components';
import { COLORS, DETAIL } from '@constants';
import { IFood } from '@types';

type DetailRoute = RouteProp<RootStackParamsList, typeof DETAIL>;

const Details = () => {
  const route = useRoute<DetailRoute>();
  const { goBack } = useNavigation<RootScreenNavigationProps<typeof DETAIL>>();

  const { id, onChange } = route.params;

  const { data, addFavorite, removeFavorite } = useFood<IFood>({ id });

  const [food, setFood] = useState(data);

  const [isMore, setIsMore] = useState(false);

  useEffect(() => {
    if (data?.favorite !== food?.favorite) setFood(data);
  }, [data]);

  const handleReadMore = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const handleBack = useCallback(() => {
    if (onChange && data && food && data.favorite !== food.favorite) onChange();
    goBack();
  }, [onChange, data, food, goBack]);

  const handlePress = useCallback(async () => {
    let newData;

    if (food) {
      const { favorite } = food;

      if (favorite === 0) {
        if (addFavorite) newData = await addFavorite(id);
      } else if (removeFavorite) {
        newData = await removeFavorite(id);
      }

      if (newData) setFood(newData);
    }
  }, [addFavorite, food, id, removeFavorite]);

  if (food === undefined) {
    return <Loading />;
  }

  const { nutritional, desc, ingredients, favorite } = food;

  return (
    <View style={styles.container}>
      <Back left={20} />

      <View style={styles.avatar}>
        <Food data={food} type="large" disabled />
      </View>

      {nutritional && <Nutritional nutritional={nutritional} />}

      <View style={styles.details}>
        <Text fontSize="xxl-0" fontWeight="600">
          Details
        </Text>

        <Text fontSize="xl-5">
          {isMore ? desc : desc?.substring(0, 150) + '...'}
          <Text
            onPress={handleReadMore}
            fontSize="xl-5"
            color="primary"
            customStyle={{ marginTop: 4 }}
          >
            {isMore ? `\bRead less.` : `\bRead more.`}
          </Text>
        </Text>

        {/* Display Ingrediants */}

        {ingredients && <Ingredients data={ingredients} />}

        <Button
          width={'100%'}
          borderRadius={9}
          onPress={handlePress}
          customStyle={{ paddingVertical: 9, width: '100%', marginTop: 27 }}
          {...(favorite
            ? {
                type: 'secondary',
                label: 'UnFavorite',
              }
            : { type: 'primary', label: 'Add to Favorite' })}
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 63,
    backgroundColor: COLORS.WHITE,
  },
  avatar: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    paddingHorizontal: 20,
    marginTop: 19,
  },
});
