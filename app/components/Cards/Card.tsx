import React, { memo } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';

import { Button, Text } from '../common';
import { ArrowICon, COLORS } from '@constants';
interface SlideItemProps {
  title: string;
  image: string;
  type: CARD_TYPES;
}

type CARD_TYPES = 'green' | 'secondary';

const Card = (props: SlideItemProps | null) => {
  const { image = '', type = 'green', title = '' } = props || {};

  return (
    <ImageBackground source={{ uri: image }} style={[styles.container]}>
      <View style={styles.info}>
        <Text fontSize="ms-0" fontWeight="600" color={type}>
          Article
        </Text>

        <Text fontSize="xl-7" fontWeight="600" customStyle={{ marginTop: 4 }}>
          {title}
        </Text>

        <Button
          paddingHorizontal={19}
          paddingVertical={6}
          customStyle={{ marginTop: 8 }}
          borderRadius={8}
          type={type}
        >
          <Text fontSize="ms" fontWeight="600" color="white">
            Read now
          </Text>
          <ArrowICon />
        </Button>
      </View>
    </ImageBackground>
  );
};

export default memo(Card);

const styles = StyleSheet.create({
  container: {
    height: 169,
    width: 320,
    justifyContent: 'space-between',
    padding: 32,
    borderRadius: 32,
  },
  info: {
    maxWidth: '60%',
    color: COLORS.LIGHT_BLACK,
  },
});
