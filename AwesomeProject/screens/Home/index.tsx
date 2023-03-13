import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HOME_SCREEN, LOGIN_SCREEN, PROFILE_SCREEN} from '../../Constants';
import {RootScreenNavigationProps} from '../../Navigation';
import {MyContext} from '../../App';

const HomeScreen = () => {
    const {navigate} =
        useNavigation<RootScreenNavigationProps<typeof HOME_SCREEN>>();

    const {user, setUser} = useContext(MyContext);

    useEffect(() => {
        if (!user || user === null) {
            navigate(LOGIN_SCREEN);
        }
    }, [navigate, user]);

    const handleLogout = useCallback(() => {
        setUser && setUser(null);
    }, [setUser]);

    const handleNavigateProfile = useCallback(() => {
        navigate(PROFILE_SCREEN);
    }, [navigate]);

    return (
        <View>
            <Text>{user?.user.email}</Text>
            <Button title="Profile" onPress={handleNavigateProfile} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});
