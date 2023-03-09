import React, { memo, ReactNode } from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

import Text, { COLOR_TYPES, TEXT_TRANSFORM } from '../Text';

const ButtonPrimary: TEXT_TRANSFORM & { backgroundColor: COLOR_TYPES } = {
  backgroundColor: 'primary',
  color: 'white',
  fontSize: 'xxl-0',
  fontWeight: 'b',
};

const ButtonGreen: TEXT_TRANSFORM & { backgroundColor: COLOR_TYPES } = {
  backgroundColor: 'green',
  color: 'white',
  fontSize: 'ms',
  fontWeight: 'b',
};

const ButtonSecondary: TEXT_TRANSFORM & { backgroundColor: COLOR_TYPES } = {
  backgroundColor: 'secondary',
  color: 'white',
  fontSize: 'xxl-0',
  fontWeight: 'b',
};

const ButtonActive: TEXT_TRANSFORM & { backgroundColor: COLOR_TYPES } = {
  backgroundColor: 'light-green',
  color: 'primary',
  fontSize: 'ms-3',
  fontWeight: 'm',
};

const defaultButton: TEXT_TRANSFORM & { backgroundColor?: COLOR_TYPES } = {
  fontSize: 'ms-3',
  fontWeight: 'm',
  color: 'gray',
};

const BUTTON_TYPES = {
  primary: ButtonPrimary,
  green: ButtonGreen,
  default: defaultButton,
  secondary: ButtonSecondary,
  active: ButtonActive,
};

export type BUTTON_TYPE =
  | 'primary'
  | 'secondary'
  | 'active'
  | 'default'
  | 'green';

export interface ButtonProps {
  label?: string;
  width?: number | string;
  type?: BUTTON_TYPE;
  height?: number;
  children?: ReactNode;
  borderRadius?: number;
  onPress?: () => void;
  marginTop?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  customStyle?: ViewStyle;
}

const Button = ({
  label,
  type = 'default',
  children,
  borderRadius,
  paddingVertical,
  paddingHorizontal,
  customStyle,
  onPress,
}: ButtonProps) => {
  const TB = BUTTON_TYPES[type];

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        {
          ...TB,
          paddingVertical,
          paddingHorizontal,
          borderRadius,
          ...customStyle,
        },
      ]}
    >
      {children ? children : <Text {...TB}>{label}</Text>}
    </Pressable>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
});
