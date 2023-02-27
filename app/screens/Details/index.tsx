import { StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import {
  Back,
  Button,
  Food,
  ListText,
  Loading,
  Nutritional,
  Text,
} from '@components';
import { RootStackParamsList } from '@navigation';
import { useFood, useFoodFavorite } from '@hooks';

type DetailRoute = RouteProp<RootStackParamsList, 'Details'>;

const Details = () => {
  const route = useRoute<DetailRoute>();
  const { id, onChange } = route.params;
  const { loading, food, error, fetch } = useFood(id);
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
        <Food data={food} size="large" disabled />
      </View>

      {food.nutritional && <Nutritional nutritional={food.nutritional} />}

      <View style={styles.details}>
        <Text font={{ fontSize: 20, fontWeight: '600' }}>Details</Text>

        <Text font={{ fontSize: 15 }}>
          {isMore ? food.desc : food.desc?.substring(0, 150) + '...'}
          <Text
            onPress={handleReadMore}
            color="PRIMARY"
            font={{ fontSize: 15, lineHeight: 22 }}
            customStyle={{ marginTop: 4 }}
          >
            {isMore ? `\bRead less.` : `\bRead more.`}
          </Text>
        </Text>

        {/* Displau Ingrediants */}

        <View style={styles.ingrediant}>
          <View style={styles.ingrediantHeader}>
            <Text font={{ fontSize: 20, fontWeight: '600' }}>Ingrediants</Text>
            <Text
              font={{ fontSize: 11, fontWeight: '500' }}
              color="PRIMARY"
              onPress={handleSeeAll}
            >
              {isAll ? 'See less' : 'See All'}
            </Text>
          </View>
          <View></View>
        </View>
        {ingrediants && <ListText data={ingrediants} />}

        {/* add Favorite */}

        <Button
          width={'100%'}
          labelColor="WHITE"
          labelFont={{ fontSize: 20, fontWeight: '600' }}
          borderRadius={9}
          onPress={handlePress}
          customStyle={{ paddingVertical: 9, width: '100%', marginTop: 27 }}
          {...(food.favorite
            ? {
                backgroundColor: 'SECONDARY',
                label: 'UnFavorite',
              }
            : { backgroundColor: 'PRIMARY', label: 'Add to Favorite' })}
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
