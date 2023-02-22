import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  Image,
  Text,
} from 'react-native';
import React, { memo } from 'react';
import CustomText from '@components/CustomText';
import { COLOR } from '@constants';
import CustomButton from '@components/CustomButton';

interface SlideItemProps {
  title: string;
  color: COLOR;
  image: ImageSourcePropType;
}

const Card = ({ image, color = 'green', title }: SlideItemProps) => {
  return (
    <ImageBackground source={image} style={styles.container}>
      <View style={styles.info}>
        <CustomText
          size={10}
          weight={'600'}
          color={color}
          transform="uppercase"
        >
          Article
        </CustomText>
        <CustomText
          size={17}
          weight={'600'}
          color={'gray'}
          lineHeight={24}
          marginTop={4}
        >
          {title}
        </CustomText>
        <CustomButton
          backgroundColor="green"
          paddingHorizontal={19}
          paddingVertical={6}
          marginTop={8}
        >
          <Text>Read now</Text>
          <Image
            source={require('@assets/icons/arrow.png')}
            style={styles.buttonIcon}
          />
        </CustomButton>
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
  type: {
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  buttonIcon: {
    marginLeft: 7,
  },
});
