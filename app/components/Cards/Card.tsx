import React, { memo } from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import { Button, Text } from '../common';
import { COLOR, COLORS } from '@constants';
interface SlideItemProps {
  title: string;
  color: COLOR;
  image: string;
}

const Card = (props: SlideItemProps | null) => {
  const { image = '', color = 'GRAY', title = '' } = props || {};
  return (
    <ImageBackground
      source={{ uri: image }}
      style={[
        styles.container,
        { ...(image === '' && { backgroundColor: COLORS.LIGHT_GRAY }) },
      ]}
    >
      <View style={styles.info}>
        <Text
          font={{ fontSize: 10, fontWeight: '600', textTransform: 'uppercase' }}
          color={color}
        >
          Article
        </Text>
        <Text
          font={{ fontSize: 17, fontWeight: '600', lineHeight: 24 }}
          color="RED"
          customStyle={{ marginTop: 4 }}
        >
          {title}
        </Text>
        <Button
          {...(title === '' ? { borderRadius: 0 } : { borderRadius: 8 })}
          backgroundColor={title !== '' ? 'GREEN_DARK' : 'WHITE'}
          paddingHorizontal={19}
          paddingVertical={6}
          customStyle={{ marginTop: 8 }}
        >
          <Text font={{ fontSize: 12, fontWeight: '600' }} color="WHITE">
            Read now
          </Text>
          <Image
            source={require('@assets/icons/arrow.png')}
            style={styles.buttonIcon}
          />
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
  },
  buttonIcon: {
    marginLeft: 7,
  },
});
