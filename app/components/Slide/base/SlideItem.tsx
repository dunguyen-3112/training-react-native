import {
  StyleSheet,
  View,
  ImageBackground,
  ImageSourcePropType,
  Image,
  Text,
} from 'react-native';
import React from 'react';
import CustomText from '@components/CustomText';
import { COLOR } from '@constants';
import CustomButton from '@components/CustomButton';

interface SlideItemProps {
  title: string;
  color: COLOR;
  image: ImageSourcePropType;
}

const SlideItem = ({ image, color = 'green', title }: SlideItemProps) => {
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
        <CustomButton
          backgroundColor="green"
          paddingHorizontal={19}
          paddingVertical={6}
          marginTop={8}
        >
          <Text>Read now</Text>
          <Image
            source={require('@assets/icons/Arrow.png')}
            style={styles.buttonIcon}
          />
        </CustomButton>
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
