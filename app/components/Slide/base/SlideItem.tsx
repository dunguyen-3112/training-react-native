import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import { COLOR } from '@constants';
import { ButtonReadNow } from '@components/Tags/Button';

interface SlideItemProps {
  title: string;
  color: COLOR;
  image: ImageSourcePropType;
}

const SlideItem = ({ image, color = 'green', title }: SlideItemProps) => {
  //   const _color =
  //     color === 'green' ? COLORS.GREEN_BLUR_LG_COLOR : COLORS.PURPLE_BLUR_COLOR;

  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.info}>
        <CustomText
          text="Article"
          size={10}
          weight={'600'}
          color={color}
          transform="uppercase"
        />
        <CustomText
          text={title}
          size={17}
          weight={'600'}
          color={'gray'}
          lineHeight={24}
          marginTop={4}
        />
        <ButtonReadNow marginTop={16} color={color} />
      </View>
    </ImageBackground>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    height: 169,
    width: 320,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 32,
  },
  info: {
    maxWidth: '55%',
  },
  type: {
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
