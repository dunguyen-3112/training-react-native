import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useRoute } from '@react-navigation/native';

import { Back, CustomButton, CustomText, Food, Nutritional } from '@components';
import FoodAvatar from '@components/FoodAvatar';
import { FoodProps } from '@components/Food';
import { COLOR } from '@constants';

const Details = () => {
  const route = useRoute();
  const { id } = route.params;
  const [isMore, setIsMore] = useState(false);

  const food: FoodProps = {
    id,
    color: 'yellow_dark',
    name: 'Burger',
    category: 'Fast Food',
    ingredients: [],
    weight: 20,
    desc: "In order to constrain memory and enable smooth scrolling, content is rendered asynchronously offscreen. This means it's possible to scroll faster than the fill rate and momentarily see blank content. This is a tradeoff that can be adjusted to suit the needs of each application, and we are working on improving it behind the scenes.",
    imageUrl:
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
        <CustomText text="Details" size={20} weight="600" />
        <CustomText size={15}>
          {isMore ? (
            <>
              {desc}
              <CustomText
                onPress={handleReadMore}
                text=" Read less"
                color="green"
                size={15}
                lineHeight={22}
                marginTop={4}
              />
            </>
          ) : (
            <>
              {desc?.substring(0, 150)}
              <CustomText
                onPress={handleReadMore}
                text=" Read more..."
                color="green"
                size={15}
                lineHeight={22}
                marginTop={4}
              />
            </>
          )}
        </CustomText>
        <CustomText text="Ingrediants" weight="600" size={20} marginTop={20} />

        <CustomButton width={'100%'} paddingVertical={9} marginTop={27}>
          <CustomText
            text="Add to Favorites"
            size={20}
            weight="600"
            color="white"
          />
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
