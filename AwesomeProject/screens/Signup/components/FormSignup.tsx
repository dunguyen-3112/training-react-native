import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Input} from '../../../components';
import {TAuth} from '../../../types';

type FormSignupProps = {
    onSignup: (body: TAuth) => void;
};

const FormSignup = ({onSignup}: FormSignupProps) => {
    const [formData, setData] = useState<TAuth>({userName: '', password: ''});

    const {password, userName} = formData;

    const handleSignup = useCallback(() => {
        onSignup(formData);
    }, [formData, onSignup]);

    const handleChangText = useCallback((feild: string, value: string) => {
        setData(prev => ({
            ...prev,
            [feild as keyof TAuth]: value,
        }));
    }, []);

    return (
        <View>
            <Text>FormSignup</Text>
            <Input
                feild="userName"
                label="Email"
                value={userName}
                onChange={handleChangText}
            />
            <Input
                feild="password"
                label="Password"
                value={password}
                onChange={handleChangText}
            />
            <Button title="Signup" onPress={handleSignup} />
        </View>
    );
};

export default FormSignup;

const styles = StyleSheet.create({});
