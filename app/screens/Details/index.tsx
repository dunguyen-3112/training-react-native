import { StyleSheet, View } from 'react-native';
import React, { useCallback, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import {
  Back,
  Button,
  Empty,
  Food,
  Loading,
  Nutritional,
  Text,
} from '@components';
import { IFood } from '@types';
import { useFetch } from '@hooks';

const Details = () => {
  const route = useRoute();
  const { id } = route.params;
  const { isLoading, data, error } = useFetch<IFood>({ url: `foods/${id}` });
  const [isMore, setIsMore] = useState(false);
  const [isAll, setIsAll] = useState(false);

  const food: IFood = {
    id,
    color: 'yellow_dark',
    name: 'Burger',
    category: {
      id: 1,
      name: 'Breakfast',
    },
    ingredients: [],
    weight: 20,
    desc: "In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.",
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/react-my-example.appspot.com/o/burgersandwich.png?alt=media&token=1a12813a-83fd-43fa-a9de-1eee3dfb4411',
    nutritional: { calories: 300, protein: 300, carbs: 300, fat: 200 },
  };

  const ingrediants = useMemo(() => {
    console.log(42, data);
    const ingrediant = data?.ingredients;
    if (ingrediant) {
      return Object.entries(ingrediant);
    }
  }, [data]);

  console.log(48, ingrediants);

  const { color = 'default', nutritional, desc = '' } = food;

  const handleReadMore = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  if (isLoading) return <Loading marginTop={20} />;
  if (data === null || error) return <Empty />;

  return (
    <View style={styles.container}>
      <Back left={20} />
      <View style={styles.avatar}>
        <Food data={data} size="large" />
      </View>
      <Nutritional color={color} nutritional={nutritional} />
      <View style={styles.details}>
        <Text size={20} weight="600">
          Details
        </Text>
        <Text size={15}>
          {isMore ? (
            <>
              {desc}
              <Text
                onPress={handleReadMore}
                color="green"
                size={15}
                lineHeight={22}
                marginTop={4}
              >
                Read less
              </Text>
            </>
          ) : (
            <>
              {desc?.substring(0, 150)}
              <Text
                onPress={handleReadMore}
                color="green"
                size={15}
                lineHeight={22}
                marginTop={4}
              >
                Read more...
              </Text>
            </>
          )}
        </Text>
        <View style={styles.ingrediant}>
          <View style={styles.ingrediantHeader}>
            <Text weight="600" size={20}>
              Ingrediants
            </Text>
            <Text size={11} weight="500" color="green">
              See all
            </Text>
          </View>
          <View></View>
        </View>

        <Button width={'100%'} paddingVertical={9} marginTop={27}>
          <Text size={20} weight="600" color="white">
            Add to Favorites
          </Text>
        </Button>
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
