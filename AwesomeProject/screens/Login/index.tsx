import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {HOME_SCREEN, LOGIN_SCREEN, SIGNUP_SCREEN} from '../../Constants';
import {useNavigation} from '@react-navigation/native';
import {RootScreenNavigationProps} from '../../Navigation';
import {MyContext} from '../../App';
import {TAuth} from '../../types';
import {useAuth} from '../../Hooks';
import {FormLogin} from './components';

const LoginScreen = () => {
    const {navigate} =
        useNavigation<RootScreenNavigationProps<typeof LOGIN_SCREEN>>();
    const [dataLogin, setDataLogin] = useState<TAuth>({
        userName: '',
        password: '',
    });
    const {error, loading, user} = useAuth(dataLogin);

    const {setUser} = useContext(MyContext);

    useEffect(() => {
        if (user && setUser) {
            setUser(user);
            navigate(HOME_SCREEN);
        }
    }, [dataLogin, user, setUser, navigate]);

    const handleLogin = useCallback((body: TAuth) => {
        setDataLogin(body);
    }, []);

    const handleNavigateSignup = useCallback(() => {
        navigate(SIGNUP_SCREEN);
    }, [navigate]);

    if (loading) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    // if (error) {
    //     return (
    //         <View>
    //             <Text>Error</Text>
    //         </View>
    //     );
    // }

    return (
        <View>
            <FormLogin onLogin={handleLogin} />
            <Text onPress={handleNavigateSignup}>Sign up</Text>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});
