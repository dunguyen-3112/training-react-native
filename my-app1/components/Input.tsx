import { View, Text, TextInput } from "react-native";
import React, { useCallback } from "react";

type Props = {
    label: string;
    value: string;
    field: string;
    placeholder?: string;
    onChange: (value: string, field: string) => void;
};
export default function Input({
    label,
    value,
    field,
    placeholder,
    onChange,
}: Props) {
    const handleChangeInput = useCallback((value: string) => {
        onChange(value, field);
    }, []);
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={handleChangeInput}
            />
        </View>
    );
}
