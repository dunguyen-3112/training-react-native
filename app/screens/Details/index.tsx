import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RootStackParamsList } from '@navigation';
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
import { DETAIL } from '@constants';
import { IFood } from '@types';

type DetailRoute = RouteProp<RootStackParamsList, typeof DETAIL>;

const Details = () => {
  const route = useRoute<DetailRoute>();

  const { id, onChange, onBack } = route.params;

  const { data, addFavorite, removeFavorite, fetch } = useFood<IFood>({ id });

  const [isMore, setIsMore] = useState(false);

  const handleReadMore = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const handlePress = useCallback(async () => {
    let newData;
    if (data) {
      const { favorite } = data;

      if (favorite === 0) {
        if (addFavorite) newData = await addFavorite(id);
      } else if (removeFavorite) {
        newData = await removeFavorite(id);
      }

      if (newData && onChange) {
        fetch && fetch();
        onChange();
      }
    }
  }, [addFavorite, data, fetch, id, onChange, removeFavorite]);

  if (data === undefined) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Back left={20} onPress={onBack} />

      <View style={styles.avatar}>
        <Food data={data} type="large" disabled />
      </View>

      {data.nutritional && <Nutritional nutritional={data.nutritional} />}

      <View style={styles.details}>
        <Text fontSize="xxl-0" fontWeight="600">
          Details
        </Text>

        <Text fontSize="xl-5">
          {isMore ? data.desc : data.desc?.substring(0, 150) + '...'}
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

        {data.ingredients && <Ingredients data={data.ingredients} />}

        {/* add Favorite */}

        <Button
          width={'100%'}
          borderRadius={9}
          onPress={handlePress}
          customStyle={{ paddingVertical: 9, width: '100%', marginTop: 27 }}
          {...(data.favorite
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
});
