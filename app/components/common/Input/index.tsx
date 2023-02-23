import { StyleSheet, TextInput, View } from 'react-native';
import React, { useMemo, useCallback, memo } from 'react';
import Text from '../Text';
import { Font, COLOR } from '@constants';

interface InputProps {
  field: string;
  value: string;
  label?: string;
  labelFont?: Font;
  labelColor?: COLOR;
  inputFont?: Font;
  inputColor?: COLOR;
  placeholder?: string;
  placeholderColor?: string;
  error?: string;
  errorColor?: string;
  onChangeText: (value: string, field?: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}
const Input = ({
  field,
  value,
  label,
  labelFont,
  labelColor,
  inputFont,
  inputColor,
  placeholder,
  onChangeText,
  onBlur,
  onFocus,
}: InputProps) => {
  const size = inputFont?.fontSize;

  const _size = useMemo(() => {
    if (typeof size === 'number') return size;
    switch (size) {
      case 'large':
        return 24;
      case 'medium':
        return 14;
      case 'small':
        return 10;
      default:
        return 12;
    }
  }, [size]);

  const handleChangeInput = useCallback(
    (value: string) => {
      onChangeText(value, field);
    },
    [field, onChangeText]
  );

  return (
    <View>
      {label && (
        <Text color={labelColor || 'black'} font={labelFont}>
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={handleChangeInput}
        style={[
          inputFont
            ? {
                color: inputColor,
                fontSize: _size,
                fontWeight: inputFont?.fontWeight || '400',
              }
            : styles.input,
        ]}
      />
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    fontWeight: '400',
    color: '#DA6317',
    paddingVertical: 14,
    paddingHorizontal: 60,
  },
});
