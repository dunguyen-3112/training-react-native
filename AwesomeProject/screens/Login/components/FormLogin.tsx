import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Input, Switch} from '../../../components';
import {TAuth} from '../../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cache} from '../../../constants';
import {onGoogleButtonPress} from '../../../helpers';

type FormLoginProps = {
    onLogin: (body: TAuth) => void;
};

const FormLogin = ({onLogin}: FormLoginProps) => {
    const [formData, setData] = useState<TAuth>({userName: '', password: ''});
    const [isRememberPassword, setIsRememberPassword] = useState(false);

    const {password, userName} = formData;

    useEffect(() => {
        const getCache = async () => {
            const cacheFormData = await AsyncStorage.getItem(cache.LOGIN);
            if (cacheFormData) {
                const data: TAuth[] = JSON.parse(cacheFormData);
                if (data.length > 0) {
                    setData(data[0]);
                }
            }
        };
        getCache();
    }, []);

    const handleLogin = useCallback(async () => {
        onLogin(formData);
        if (isRememberPassword) {
            const cacheFormData = await AsyncStorage.getItem(cache.LOGIN);
            let data: TAuth[] = [];
            if (cacheFormData) {
                data = JSON.parse(cacheFormData);
            }
            const index = data.findIndex(
                (item: TAuth) => item.userName === formData.userName,
            );

            if (index >= 0) {
                data[index].password = formData.password;
            }
            data = [formData, ...data];
            await AsyncStorage.setItem(cache.LOGIN, JSON.stringify(data));
        }
    }, [formData, isRememberPassword, onLogin]);

    const handleChangText = useCallback((feild: string, value: string) => {
        setData(prev => ({
            ...prev,
            [feild as keyof TAuth]: value,
        }));
    }, []);

    const handleRememberPassword = useCallback(() => {
        setIsRememberPassword(prev => !prev);
    }, []);

    return (
        <View>
            <Text>FormLogin</Text>
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
            <Switch
                value={isRememberPassword}
                label="Remember password"
                onChange={handleRememberPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button
                title="Google Sign-In"
                onPress={() =>
                    onGoogleButtonPress().then(() =>
                        console.log('Signed in with Google!'),
                    )
                }
            />
        </View>
    );
};

export default FormLogin;

const styles = StyleSheet.create({
    googleButton: {
        width: 160,
        height: 45,
    },
});
