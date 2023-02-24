import { StyleSheet, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';

import {
  Back,
  Button,
  Empty,
  Food,
  ListText,
  Loading,
  Nutritional,
  Text,
} from '@components';
import { IFood } from '@types';
import { useFetch } from '@hooks';
import { RootStackParamsList } from '@navigation';
import { fetchData } from '@utils';

type DetailRoute = RouteProp<RootStackParamsList, 'Details'>;

const Details = () => {
  const route = useRoute<DetailRoute>();
  const { id, onChange } = route.params;
  const { isLoading, data, error } = useFetch<IFood>({ url: `foods/${id}` });
  const [food, setFood] = useState<IFood>();
  const [isMore, setIsMore] = useState(false);
  const [isAll, setIsAll] = useState(false);

  useEffect(() => {
    if (data) setFood(data);
  }, [data]);

  const handleReadMore = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const handleSeeAll = useCallback(() => {
    setIsAll((prev) => !prev);
  }, []);

  const handleFavorite = useCallback(async () => {
    if (food) {
      const check = food.favorite == 1 ? 0 : 1;
      const obj: IFood = { ...food, favorite: check };
      const newData = await fetchData<IFood>({
        url: `foods/${id}`,
        options: {
          method: 'PUT',
          body: obj,
        },
      });
      setFood(newData);
      onChange(newData);
    }
  }, [food, id, onChange]);

  const ingrediants = useMemo(() => {
    const ingrediant = food?.ingredients;
    if (ingrediant) {
      const ingrediants = Object.values(ingrediant);
      return isAll ? ingrediants : ingrediants.slice(0, 2);
    }
  }, [food?.ingredients, isAll]);

  if (isLoading) return <Loading marginTop={20} />;
  if (food === undefined || error) return <Empty />;

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
          customStyle={{ paddingVertical: 9, width: '100%', marginTop: 27 }}
          onPress={handleFavorite}
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
