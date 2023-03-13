import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import {FormSignup} from './components';
import {LOGIN_SCREEN, SIGNUP_SCREEN} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import {RootScreenNavigationProps} from '../../Navigation';
import {TAuth} from '../../types';
import Auth from '@react-native-firebase/auth';

const SignupScreen = () => {
    const {navigate} =
        useNavigation<RootScreenNavigationProps<typeof SIGNUP_SCREEN>>();

    const handleNavigateLogin = useCallback(() => {
        navigate(LOGIN_SCREEN);
    }, [navigate]);

    const handleSignup = useCallback(
        async (body: TAuth) => {
            try {
                const {password, userName} = body;
                if (
                    userName &&
                    userName !== '' &&
                    password &&
                    password !== ''
                ) {
                    const user = await Auth().createUserWithEmailAndPassword(
                        userName,
                        password,
                    );

                    if (user) {
                        navigate(LOGIN_SCREEN);
                    }
                }
            } catch (error) {}
        },
        [navigate],
    );

    return (
        <View>
            <Text>Signup</Text>
            <FormSignup onSignup={handleSignup} />
            <Text onPress={handleNavigateLogin}>Login</Text>
        </View>
    );
};

export default SignupScreen;

const styles = StyleSheet.create({});
