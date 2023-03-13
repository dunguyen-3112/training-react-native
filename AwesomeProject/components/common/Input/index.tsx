import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useCallback} from 'react';

type TextInputProps = {
    label: string;
    feild: string;
    value: string;
    onChange: (feild: string, value: string) => void;
};
const Input = ({label, feild, value, onChange}: TextInputProps) => {
    const handleChangeText = useCallback(
        (_value: string) => {
            onChange(feild, _value);
        },
        [feild, onChange],
    );

    return (
        <View>
            <Text>{label}</Text>
            <TextInput value={value} onChangeText={handleChangeText} />
        </View>
    );
};

export default Input;

const styles = StyleSheet.create({});
