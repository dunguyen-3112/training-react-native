import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamsList } from '@navigation';
import { useFood, useFoodFavorite } from '@hooks';
import {
  Back,
  Button,
  Food,
  Ingredients,
  Loading,
  Nutritional,
  Text,
} from '@components';

type DetailRoute = RouteProp<RootStackParamsList, 'Details'>;

const Details = () => {
  const route = useRoute<DetailRoute>();

  const { id, onChange } = route.params;

  const { food, fetch } = useFood(id);
  const { addFavorite, removeFavorite } = useFoodFavorite();

  const [isMore, setIsMore] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const handleReadMore = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const handlePress = useCallback(async () => {
    let status;
    if (food) {
      if (!food.favorite) {
        if (addFavorite) {
          status = await addFavorite(id);
        }
      } else {
        if (removeFavorite) {
          status = await removeFavorite(id);
        }
      }
      if (status) {
        onChange && onChange();
        fetch && fetch();
      }
    }
  }, [addFavorite, fetch, food, id, onChange, removeFavorite]);

  const handleSeeAll = useCallback(() => {
    setIsAll((prev) => !prev);
  }, []);

  const ingrediants = useMemo(() => {
    const ingrediant = food?.ingredients;

    if (ingrediant) {
      const ingrediants = Object.values(ingrediant);
      return isAll ? ingrediants : ingrediants.slice(0, 2);
    }
  }, [food?.ingredients, isAll]);

  if (food === undefined) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Back left={20} />

      <View style={styles.avatar}>
        <Food data={food} type="large" disabled />
      </View>

      {food.nutritional && <Nutritional nutritional={food.nutritional} />}

      <View style={styles.details}>
        <Text fontSize="xxl-0" fontWeight="600">
          Details
        </Text>

        <Text fontSize="xl-5">
          {isMore ? food.desc : food.desc?.substring(0, 150) + '...'}
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

        <View style={styles.ingrediant}>
          <View style={styles.ingrediantHeader}>
            <Text fontSize="xxl-0" fontWeight="600">
              Ingrediants
            </Text>
            <Text
              fontSize="ms-1"
              fontWeight="500"
              color="primary"
              onPress={handleSeeAll}
            >
              {isAll ? 'See less' : 'See All'}
            </Text>
          </View>
          <View></View>
        </View>
        {ingrediants && <Ingredients data={ingrediants} />}

        {/* add Favorite */}

        <Button
          width={'100%'}
          borderRadius={9}
          onPress={handlePress}
          customStyle={{ paddingVertical: 9, width: '100%', marginTop: 27 }}
          {...(food.favorite
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
    backgroundColor: '#fff',
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
  ingrediant: {
    marginTop: 20,
  },
  ingrediantHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
