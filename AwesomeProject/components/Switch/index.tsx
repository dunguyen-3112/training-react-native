import {StyleSheet, Switch, Text, View} from 'react-native';
import React from 'react';

type CustomSwitchProps = {
    value: boolean;
    label: string;
    onChange: () => void;
};
const CustomSwitch = (props: CustomSwitchProps) => {
    const {label} = props;

    return (
        <View>
            <Text>{label}</Text>
            <Switch {...props} />
        </View>
    );
};

export default CustomSwitch;

const styles = StyleSheet.create({});
