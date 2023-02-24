import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  Image,
} from 'react-native';
import React, { memo } from 'react';
import { Button, Text } from '@components';
import { COLOR } from '@constants';
interface SlideItemProps {
  title: string;
  color: COLOR;
  image: ImageSourcePropType;
}

const Card = ({ image, color = 'PRIMARY', title }: SlideItemProps) => {
  return (
    <ImageBackground source={image} style={styles.container}>
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
          backgroundColor="GREEN_DARK"
          paddingHorizontal={19}
          paddingVertical={6}
          borderRadius={8}
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
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 32,
  },
  info: {
    maxWidth: '60%',
  },
  buttonIcon: {
    marginLeft: 7,
  },
});
