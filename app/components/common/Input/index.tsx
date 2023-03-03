import { StyleSheet, TextInput, View } from 'react-native';
import React, { useCallback, memo, useRef } from 'react';
import Text from '../Text';
import { COLORS } from '@constants';

const INPUT_STYLES = {
  default: {
    color: COLORS.BLACK,
    placeholderTextColor: COLORS.SECONDARY,
    backgroundColor: COLORS.SECONDARY,
  },
};

type INPUT_TYPES = 'default';

interface InputProps {
  field: string;
  value: string;
  label?: string;
  ref?: TextInput;
  placeholder?: string;
  type?: INPUT_TYPES;
  onChangeText: (value: string, field?: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}
const Input = ({
  field,
  ref,
  value,
  label,
  placeholder,
  type = 'default',
  onChangeText,
  onBlur,
  onFocus,
}: InputProps) => {
  const inputRef = useRef<TextInput>(ref || null);

  const handleChangeInput = useCallback(
    (value: string) => {
      onChangeText(value, field);
    },
    [field, onChangeText]
  );

  const inputType = INPUT_STYLES[type];

  return (
    <View>
      {label && (
        <Text
          fontSize="m"
          fontWeight="400"
          customStyle={{ color: inputType.color }}
        >
          {label}
        </Text>
      )}
      <TextInput
        value={value}
        placeholder={placeholder}
        onBlur={onBlur}
        ref={inputRef}
        placeholderTextColor={inputType.placeholderTextColor}
        onFocus={onFocus}
        onChangeText={handleChangeInput}
        style={[styles.input, { color: inputType.color }]}
      />
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    fontSize: 13,
    fontWeight: '400',
    paddingVertical: 14,
    paddingHorizontal: 60,
  },
});
