import { Button, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Back, CustomButton, CustomText, Food, Nutritional } from '@components';
import { IFood } from '@types';

const Details = () => {
  const route = useRoute();
  const { id } = route.params;
  const [isMore, setIsMore] = useState(false);

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

  const handleReadMore = useCallback(() => {
    setIsMore((prev) => !prev);
  }, []);

  const { color = 'default', nutritional, desc = '' } = food;
  return (
    <View style={styles.container}>
      <Back left={20} />
      <View style={styles.avatar}>
        <Food
          food={food}
          //   onPress={() => {}}
          size="large"
        />
      </View>
      <Nutritional color={color} nutritional={nutritional} />
      <View style={styles.details}>
        <CustomText size={20} weight="600">
          Details
        </CustomText>
        <CustomText size={15}>
          {isMore ? (
            <>
              {desc}
              <CustomText
                onPress={handleReadMore}
                color="green"
                size={15}
                lineHeight={22}
                marginTop={4}
              >
                Read less
              </CustomText>
            </>
          ) : (
            <>
              {desc?.substring(0, 150)}
              <CustomText
                onPress={handleReadMore}
                color="green"
                size={15}
                lineHeight={22}
                marginTop={4}
              >
                Read more...
              </CustomText>
            </>
          )}
        </CustomText>
        <CustomText weight="600" size={20} marginTop={20}>
          Ingrediants
        </CustomText>

        <CustomButton width={'100%'} paddingVertical={9} marginTop={27}>
          <CustomText size={20} weight="600" color="white">
            Add to Favorites
          </CustomText>
        </CustomButton>
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
  description: {},
});
