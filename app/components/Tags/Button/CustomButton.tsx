import { Image, StyleSheet, ImageSourcePropType } from 'react-native';
import React from 'react';
import { COLOR, COLORS, Font } from '@constants';
import CustomText from '@components/CustomText';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ButtonStyle {
  color?: COLOR;
  label: string;
  icon?: ImageSourcePropType;
  labelFont?: Font;
  labelColor?: COLOR;
  marginTop?: number;
}

const CustomButton = ({
  color = 'green',
  label,
  marginTop = 0,
  icon,
  labelFont = { fontSize: 12, fontWeight: '400' },
  labelColor = 'white',
}: ButtonStyle) => {
  const _color = color === 'green' ? COLORS.GREEN_COLOR : COLORS.ORANGE_COLOR;
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: _color, marginTop: marginTop }]}
    >
      <CustomText
        text={label}
        size={labelFont.fontSize}
        weight={labelFont.fontWeight}
        color={labelColor}
      />
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    color: '',
    paddingVertical: 6,
    paddingHorizontal: 19,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    marginLeft: 8,
  },
});
